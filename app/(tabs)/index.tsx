import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather } from '@expo/vector-icons'; // Add this import at the top
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  // DATA DIRI - Ganti dengan data Anda sendiri
  const profileData = {
    name: "Muhammad Labiibul Muhsin",
    title: "Mahasiswa Informatika",
    university: "Institut Mahardika",
    nim: "623c0008",
    email: "muhsinlabibul.com",
    phone: "0812-3456-7890",
    location: "Kota Cirebon, Indonesia",
    bio: "Saya adalah mahasiswa teknik informatika s1 saat ini saya sedang mendalami pemograman pyhton.",
    social: {
      github: "https://github.com/abilmhsn",
      linkedin: "https://linkedin.com/in/username",
      instagram: "https://instagram.com/abilmhsn_"
    }
  };
    const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header dengan Gradient */}
      <LinearGradient
        colors={['#000000ff', '#662249', '#000000ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          {/* Profile Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/abil.png')}
              // Ganti dengan foto Anda: source={{ uri: 'URL_FOTO_ANDA' }}
              style={styles.profileImage}
              contentFit="cover"
            />
            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <ThemedText style={styles.statusText}>Available</ThemedText>
            </View>
          </View>

          {/* Name & Title */}
          <ThemedText style={styles.name}>{profileData.name}</ThemedText>
          <ThemedText style={styles.title}>{profileData.title}</ThemedText>
          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={16} color="#ffffffff" />
            <ThemedText style={styles.location}>{profileData.location}</ThemedText>
          </View>
        </View>
      </LinearGradient>

      {/* About Me Section */}
      <ThemedView style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="user" size={24} color="#ffffffff" />
          <ThemedText type="subtitle" style={styles.sectionTitle}>Tentang Saya</ThemedText>
        </View>
        <ThemedText style={styles.bio}>{profileData.bio}</ThemedText>
      </ThemedView>

      {/* Info Cards */}
      <ThemedView style={styles.infoSection}>
        <View style={styles.infoContainer}>
          {/* University Card */}
          <View style={styles.infoCard}>
            <View style={styles.iconWrapper}>
              <Feather name="book" size={24} color="#662249" />
            </View>
            <View style={styles.textContainer}>
              <ThemedText style={styles.label}>Universitas</ThemedText>
              <ThemedText style={styles.value}>{profileData.university}</ThemedText>
            </View>
          </View>

          {/* NIM Card */}
          <View style={styles.infoCard}>
            <View style={styles.iconWrapper}>
              <Feather name="hash" size={24} color="#662249" />
            </View>
            <View style={styles.textContainer}>
              <ThemedText style={styles.label}>NIM</ThemedText>
              <ThemedText style={styles.value}>{profileData.nim}</ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>

      {/* Contact Section */}
      <ThemedView style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="mail" size={24} color="#ffffffff" />
          <ThemedText type="subtitle" style={styles.sectionTitle}>Kontak</ThemedText>
        </View>

        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => openLink(`mailto:${profileData.email}`)}
        >
          <View style={styles.contactIcon}>
            <Feather name="mail" size={20} color="#662249" />
          </View>
          <View style={styles.contactText}>
            <ThemedText style={styles.contactLabel}>Email</ThemedText>
            <ThemedText style={styles.contactValue}>{profileData.email}</ThemedText>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#000000ff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => openLink(`tel:${profileData.phone}`)}
        >
          <View style={styles.contactIcon}>
            <Feather name="phone" size={20} color="#662249" />
          </View>
          <View style={styles.contactText}>
            <ThemedText style={styles.contactLabel}>Telepon</ThemedText>
            <ThemedText style={styles.contactValue}>{profileData.phone}</ThemedText>
          </View>
          <IconSymbol name="chevron.right" size={20} color="#ccc" />
        </TouchableOpacity>
      </ThemedView>

      {/* Social Media Section */}
      <ThemedView style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="share-2" size={24} color="#667eea" />
          <ThemedText type="subtitle" style={styles.sectionTitle}>Social Media</ThemedText>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#333' }]}
            onPress={() => openLink(profileData.social.github)}
          >
            <Feather name="github" size={24} color="#fff" />
            <ThemedText style={styles.socialText}>GitHub</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#0077b5' }]}
            onPress={() => openLink(profileData.social.linkedin)}
          >
            <Feather name="linkedin" size={24} color="#fff" />
            <ThemedText style={styles.socialText}>LinkedIn</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#e1306c' }]}
            onPress={() => openLink(profileData.social.instagram)}
          >
            <Feather name="instagram" size={24} color="#fff" />
            <ThemedText style={styles.socialText}>Instagram</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      {/* Footer */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          Made with using Expo & React Native
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  statusBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4caf50',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginRight: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    padding: 20,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
  },
  bio: {
    fontSize: 15,
    lineHeight: 24,
    opacity: 0.8,
  },
  infoSection: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fef2f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8eaf6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactText: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 2,
    color: '#662249',
  },
  contactValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  socialText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    opacity: 0.5,
  },
});