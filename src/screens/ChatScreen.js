import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import ChatService from '../services/chat';
import AuthService from '../services/auth';
import MessageBubble from '../components/MessageBubble';
import ChatInput from '../components/ChatInput';

function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    // Load initial message from Apollo
    const initialMessage = ChatService.getInitialMessage();
    setMessages([initialMessage]);
  }, []);

  const handleSend = async messageText => {
    setLoading(true);

    // Add user message immediately to UI
    const userMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Get Apollo response
    const result = await ChatService.sendMessage(messageText);

    if (result.success) {
      setMessages(prev => [...prev, result.message]);

      // Scroll to bottom again after Apollo's response
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } else {
      Alert.alert('Error', result.error || 'Failed to send message');
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await AuthService.logout();
          ChatService.clearConversation();
          navigation.replace('Login');
        },
      },
    ]);
  };

  const renderMessage = ({ item }) => <MessageBubble message={item} />;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={['top']}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          backgroundColor: colors.background,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.text,
            }}
          >
            Apollo
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.textSecondary,
            }}
          >
            Your AI Assistant
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 14,
              fontWeight: '600',
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 8,
          }}
          onContentSizeChange={() => {
            flatListRef.current?.scrollToEnd({ animated: false });
          }}
        />

        {/* Chat Input */}
        <ChatInput onSend={handleSend} disabled={loading} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default ChatScreen;
