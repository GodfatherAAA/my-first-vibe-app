import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type IconName = keyof typeof Ionicons.glyphMap;

interface SocialButtonProps {
  label: string;
  icon: IconName;
  iconColor: string;
  onPress: () => void;
}

export function SocialButton({
  label,
  icon,
  iconColor,
  onPress,
}: SocialButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={22} color={iconColor} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingVertical: spacing.md - 2,
    minHeight: 48,
  },
  pressed: {
    backgroundColor: colors.surfaceMuted,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
});
