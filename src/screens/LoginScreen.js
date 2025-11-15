import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import AuthService from '../services/auth';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    const result = await AuthService.login(email, password);
    setLoading(false);

    if (result.success) {
      // Navigate to chat screen
      navigation.replace('Chat');
    } else {
      Alert.alert('Login Failed', result.error || 'Something went wrong');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
          {/* Logo/Title */}
          <View style={{ marginBottom: 48, alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 48,
                fontWeight: 'bold',
                color: colors.primary,
                marginBottom: 8,
              }}
            >
              Apollo
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.textSecondary,
              }}
            >
              Your Personal AI Assistant
            </Text>
          </View>

          {/* Input Fields */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: colors.text,
                marginBottom: 8,
              }}
            >
              Email
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.surface,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 12,
                padding: 16,
                fontSize: 16,
                color: colors.text,
              }}
              placeholder="your@email.com"
              placeholderTextColor={colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: colors.text,
                marginBottom: 8,
              }}
            >
              Password
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.surface,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 12,
                padding: 16,
                fontSize: 16,
                color: colors.text,
              }}
              placeholder="Enter your password"
              placeholderTextColor={colors.textSecondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="password"
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 12,
              padding: 16,
              alignItems: 'center',
              marginBottom: 16,
            }}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 16,
                  fontWeight: '600',
                }}
              >
                Sign In
              </Text>
            )}
          </TouchableOpacity>

          {/* Helper Text */}
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: 'center',
              }}
            >
              This is a demo version. Enter any email and password to continue.
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
