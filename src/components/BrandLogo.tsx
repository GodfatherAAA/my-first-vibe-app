import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/spacing';

export function BrandLogo() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primaryLight, colors.primary, colors.accent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.badge}
      >
        <Text style={styles.letter}>V</Text>
      </LinearGradient>
      <Text style={styles.name}>Vibe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  badge: {
    width: 72,
    height: 72,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  letter: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.textOnPrimary,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textOnPrimary,
    letterSpacing: 1,
  },
});
