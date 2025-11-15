import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../constants/colors';

function MessageBubble({ message }) {
  const isUser = message.sender === 'user';

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 16,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          maxWidth: '80%',
          backgroundColor: isUser ? colors.userBubble : colors.apolloBubble,
          borderRadius: 16,
          padding: 12,
          ...(isUser
            ? {
                borderTopRightRadius: 4,
              }
            : {
                borderTopLeftRadius: 4,
              }),
        }}
      >
        {!isUser && (
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: colors.primary,
              marginBottom: 4,
            }}
          >
            Apollo
          </Text>
        )}
        <Text
          style={{
            fontSize: 16,
            color: isUser ? colors.userBubbleText : colors.apolloBubbleText,
            lineHeight: 22,
          }}
        >
          {message.text}
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: isUser
              ? 'rgba(255, 255, 255, 0.7)'
              : colors.textSecondary,
            marginTop: 4,
          }}
        >
          {formatTime(message.timestamp)}
        </Text>
      </View>
    </View>
  );
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export default MessageBubble;
