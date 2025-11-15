/**
 * Chat Service for Apollo Agent
 *
 * This is a mock implementation that simulates Apollo agent responses.
 * In the future, this will integrate with your backend API and AI models.
 */

class ChatService {
  constructor() {
    this.conversationHistory = [];
  }

  /**
   * Send a message to Apollo and get a response
   * TODO: Integrate with backend API and OpenAI/Anthropic
   */
  async sendMessage(message) {
    try {
      // Add user message to history
      const userMessage = {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date(),
      };

      this.conversationHistory.push(userMessage);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate mock Apollo response based on message content
      const responseText = this.generateMockResponse(message);

      const apolloMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'apollo',
        timestamp: new Date(),
      };

      this.conversationHistory.push(apolloMessage);

      return {
        success: true,
        message: apolloMessage,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * Generate mock responses from Apollo
   */
  generateMockResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Simple pattern matching for different types of queries
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm Apollo, your personal assistant. I'm here to help you organize aspects of your life. How can I assist you today?";
    }

    if (lowerMessage.includes('task') || lowerMessage.includes('todo')) {
      return "I can help you manage your tasks! In the future, I'll be able to create, track, and organize your to-do lists. What tasks would you like to work on?";
    }

    if (lowerMessage.includes('schedule') || lowerMessage.includes('calendar')) {
      return "I'll soon be able to help you manage your schedule and calendar events. What would you like to schedule?";
    }

    if (lowerMessage.includes('remind')) {
      return "Reminders are coming soon! I'll be able to set up reminders for important tasks and events. What would you like to be reminded about?";
    }

    if (lowerMessage.includes('help')) {
      return "I'm Apollo, your AI assistant. I'm designed to help you organize your life. Currently, I'm a work in progress, but soon I'll be able to help with tasks, schedules, reminders, notes, and more!";
    }

    // Default response
    return "I understand you're asking about: \"" + userMessage + "\". I'm currently learning and will be able to help you better soon! For now, I'm focused on understanding your needs and building features to assist you.";
  }

  /**
   * Get conversation history
   */
  getConversationHistory() {
    return this.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearConversation() {
    this.conversationHistory = [];
  }

  /**
   * Get initial greeting message
   */
  getInitialMessage() {
    return {
      id: 'welcome-' + Date.now(),
      text: "Hi! I'm Apollo, your personal AI assistant. I'm here to help you organize your life. How can I help you today?",
      sender: 'apollo',
      timestamp: new Date(),
    };
  }
}

export default new ChatService();
