import { View, Text, StyleSheet } from 'react-native';
import TableExample from '../../../components/coursesTable';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <TableExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
  },
});