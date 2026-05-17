import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthTextInput } from '../components/AuthTextInput';
import { BrandLogo } from '../components/BrandLogo';
import { PrimaryButton } from '../components/PrimaryButton';
import { SocialButton } from '../components/SocialButton';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

export function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) {
      next.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Email không hợp lệ';
    }
    if (!password) {
      next.password = 'Vui lòng nhập mật khẩu';
    } else if (password.length < 6) {
      next.password = 'Mật khẩu tối thiểu 6 ký tự';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#312E81', '#4F46E5', '#7C3AED', '#DB2777']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={[styles.decorCircle, styles.circleTop]} />
      <View style={[styles.decorCircle, styles.circleBottom]} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scroll,
            {
              paddingTop: insets.top + spacing.lg,
              paddingBottom: insets.bottom + spacing.lg,
            },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <BrandLogo />

          <Text style={styles.tagline}>Chào mừng trở lại 👋</Text>
          <Text style={styles.subtitle}>
            Đăng nhập để tiếp tục trải nghiệm
          </Text>

          <View style={styles.card}>
            <AuthTextInput
              label="Email"
              icon="mail-outline"
              placeholder="ban@email.com"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
            />

            <AuthTextInput
              label="Mật khẩu"
              icon="lock-closed-outline"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              error={errors.password}
              isPassword
              textContentType="password"
              autoComplete="password"
            />

            <Pressable style={styles.forgotRow}>
              <Text style={styles.forgotText}>Quên mật khẩu?</Text>
            </Pressable>

            <PrimaryButton
              title="Đăng nhập"
              onPress={handleLogin}
              loading={loading}
            />

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>hoặc tiếp tục với</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <SocialButton
                label="Google"
                icon="logo-google"
                iconColor="#EA4335"
                onPress={() => {}}
              />
              <View style={styles.socialGap} />
              <SocialButton
                label="Apple"
                icon="logo-apple"
                iconColor={colors.text}
                onPress={() => {}}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Chưa có tài khoản? </Text>
            <Pressable>
              <Text style={styles.footerLink}>Đăng ký ngay</Text>
            </Pressable>
          </View>

          <View style={styles.secureRow}>
            <Ionicons
              name="shield-checkmark-outline"
              size={16}
              color="rgba(255,255,255,0.7)"
            />
            <Text style={styles.secureText}>
              Thông tin của bạn được bảo mật an toàn
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  circleTop: {
    width: 220,
    height: 220,
    top: -60,
    right: -40,
  },
  circleBottom: {
    width: 160,
    height: 160,
    bottom: 120,
    left: -50,
  },
  tagline: {
    marginTop: spacing.xl,
    fontSize: 26,
    fontWeight: '700',
    color: colors.textOnPrimary,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 12,
  },
  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: -spacing.sm,
    marginBottom: spacing.lg,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing.md,
    fontSize: 13,
    color: colors.textSecondary,
  },
  socialRow: {
    flexDirection: 'row',
  },
  socialGap: {
    width: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  footerText: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  footerLink: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textOnPrimary,
    textDecorationLine: 'underline',
  },
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  secureText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.65)',
  },
});
