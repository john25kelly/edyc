import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DetailsScreen() {

   return <WebView source={{ uri: "https://www.halsail.com/Result/Public/79828" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
