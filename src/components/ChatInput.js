import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { colors } from '../constants/colors';

function ChatInput({ onSend, disabled = false }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
        backgroundColor: colors.background,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surface,
          borderRadius: 24,
          borderWidth: 1,
          borderColor: colors.border,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginRight: 12,
        }}
      >
        <TextInput
          style={{
            fontSize: 16,
            color: colors.text,
            maxHeight: 100,
          }}
          placeholder="Message Apollo..."
          placeholderTextColor={colors.textSecondary}
          value={message}
          onChangeText={setMessage}
          multiline
          editable={!disabled}
          onSubmitEditing={handleSend}
          blurOnSubmit={false}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor:
            message.trim() && !disabled ? colors.primary : colors.border,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleSend}
        disabled={!message.trim() || disabled}
      >
        <Text
          style={{
            color: message.trim() && !disabled ? '#ffffff' : colors.textSecondary,
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          ↑
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChatInput;
