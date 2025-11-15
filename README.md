# Apollo - Your Personal AI Assistant

Apollo is a React Native iOS app designed to help you organize aspects of your life through an intelligent chat interface.

## Overview

This is an initial UI-only mock version of Apollo. The app currently features:

- **Authentication Flow**: Login screen with Firebase authentication placeholder
- **Chat Interface**: Clean, modern chat UI to interact with Apollo
- **Mock AI Responses**: Simulated Apollo agent responses (no actual AI integration yet)

## Future Features

- Firebase Authentication integration
- Backend API proxy for OpenAI/Anthropic model calls
- Task management and organization
- Calendar and scheduling assistance
- Reminders and notifications
- Cross-platform support (Android)

## Tech Stack

- **React Native** (without Expo)
- **React Navigation** - For navigation between screens
- **NativeWind** - Tailwind CSS for React Native (shadcn-like styling)
- **AsyncStorage** - Local data persistence
- **Firebase** (planned) - Authentication and backend services

## Project Structure

```
apollo/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── MessageBubble.js
│   │   └── ChatInput.js
│   ├── screens/          # Screen components
│   │   ├── LoginScreen.js
│   │   └── ChatScreen.js
│   ├── services/         # Service layer
│   │   ├── auth.js       # Firebase auth placeholder
│   │   └── chat.js       # Mock chat service
│   ├── constants/        # App constants
│   │   └── colors.js
│   └── utils/            # Utility functions
├── ios/                  # iOS native code
└── App.js               # Main app component
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- Xcode (for iOS development)
- CocoaPods
- React Native CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/apollo.git
cd apollo
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies:
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

### Running the App

#### iOS

```bash
npx react-native run-ios
```

Or specify a simulator:
```bash
npx react-native run-ios --simulator="iPhone 17 Pro"
```

## Demo Usage

The current version is a UI mock. To try it out:

1. Launch the app
2. On the login screen, enter any email and password (e.g., `demo@apollo.com` / `password123`)
3. Start chatting with Apollo!
   - Try saying "Hello"
   - Ask about tasks: "Help me with tasks"
   - Ask about scheduling: "What about my schedule?"
   - Type "help" to see what Apollo can do

## Development Roadmap

### Phase 1 (Current - UI Mock)
- [x] Basic project setup
- [x] Login screen with auth placeholder
- [x] Chat interface with mock responses
- [x] Navigation structure

### Phase 2 (Next)
- [ ] Firebase Authentication integration
- [ ] Backend API setup
- [ ] OpenAI/Anthropic integration
- [ ] Real-time chat functionality

### Phase 3 (Future)
- [ ] Task management features
- [ ] Calendar integration
- [ ] Reminders system
- [ ] User preferences and settings
- [ ] Android support

## Troubleshooting

If you encounter issues:

1. **Metro bundler issues**: Try resetting the cache
   ```bash
   npx react-native start --reset-cache
   ```

2. **iOS build issues**: Clean the build
   ```bash
   cd ios
   xcodebuild clean
   cd ..
   ```

3. **Pod install issues**:
   ```bash
   cd ios
   bundle exec pod install --repo-update
   cd ..
   ```

## Contributing

This is a personal project currently in early development. Contributions and suggestions are welcome!

## License

MIT
