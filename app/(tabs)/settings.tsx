import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import React, { useState } from 'react';  

// === 1. DEFINISI INTERFACE ===
interface SettingItemProps {
  icon: string;
  title: string;
  isSwitch?: boolean;
  isLast?: boolean;
  onPress?: () => void;
}
// =============================

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  // === 2. PENERAPAN INTERFACE PADA KOMPONEN ===
  const SettingItem = ({ icon, title, isSwitch = false, isLast = false, onPress }: SettingItemProps) => (
    <TouchableOpacity 
        style={[styles.itemContainer, isLast && styles.lastItem]} 
        onPress={onPress}
        disabled={isSwitch}
    >
      <View style={styles.itemLeft}>
        {/* ... Konten ikon dan teks ... */}
        <View style={styles.iconPlaceholder}>
            <Text style={{color: '#fff', fontSize: 16}}>{icon}</Text>
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      {isSwitch ? (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      ) : (
        <Text style={styles.chevron}>&gt;</Text> 
      )}
    </TouchableOpacity>
  );

const ProfileCard = () => (
    <View style={styles.profileContainer}>
        {/* Sumber foto placeholder. Ganti URL ini dengan foto Anda. */}
        <Image
            source={ require('@/assets/images/abil.png') } 
            style={styles.profileImage}
        />
        <View style={styles.profileText}>
            <Text style={styles.profileName}>Muhammad Labiibul Muhsin</Text>
            <Text style={styles.profileDetail}>Pengembang Aplikasi (Portfolio)</Text>
            <Text style={styles.profileDetail}>muhsinlabibul@gmail.com</Text>
            <Text style={styles.profileDetail}>082295331223</Text>
        </View>
    </View>
);

return (
    <View style={styles.screen}>
        <Text style={styles.headerTitle}>Pengaturan</Text>
        <ScrollView contentContainerStyle={styles.container}>

            {/* === BARIS TAMBAHAN: TAMPILKAN PROFILE CARD === */}
            <ProfileCard />
            {/* ============================================== */}

            {/* --- BAGIAN 1: AKUN --- */}
            <Text style={styles.sectionTitle}>AKUN</Text>
        <View style={styles.sectionContent}>
          <SettingItem icon="👤" title="Edit Profil" onPress={() => console.log('Navigasi Edit Profil')} />
          <SettingItem icon="🔒" title="Ganti Kata Sandi" onPress={() => console.log('Navigasi Ganti Kata Sandi')} />
          <SettingItem icon="🚪" title="Keluar (Logout)" isLast={true} onPress={() => console.log('Logout dilakukan')} />
        </View>

        {/* --- BAGIAN 2: TAMPILAN --- */}
        <Text style={styles.sectionTitle}>TAMPILAN</Text>
        <View style={styles.sectionContent}>
          <SettingItem icon="🌐" title="Bahasa (Indonesia)" onPress={() => console.log('Navigasi Bahasa')} />
          <SettingItem icon="🌙" title="Tema Gelap" isSwitch={true} />
          <SettingItem icon="🅰️" title="Ukuran Font" isLast={true} onPress={() => console.log('Navigasi Ukuran Font')} />
        </View>

        {/* --- BAGIAN 3: LAINNYA --- */}
        <Text style={styles.sectionTitle}>LAINNYA</Text>
        <View style={styles.sectionContent}>
          <SettingItem icon="⭐" title="Beri Nilai Kami" onPress={() => console.log('Buka link review')} />
          <SettingItem icon="📜" title="Kebijakan Privasi" onPress={() => console.log('Buka Kebijakan Privasi')} />
          <SettingItem icon="ℹ️" title="Tentang Aplikasi" isLast={true} onPress={() => console.log('Navigasi Info App')} />
        </View>
        
        <Text style={styles.versionText}>
          Aplikasi Portofolio V1.0.0 {'\n'} 
          Didesain oleh [Nama Anda]
        </Text>

      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F7', // Latar belakang abu-abu muda
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    paddingHorizontal: 15,
    paddingTop: 50, // Ruang untuk status bar
    paddingBottom: 10,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EBEBEB',
  },
  container: {
    paddingVertical: 10,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    // Memberikan garis bawah untuk memisahkan dari section settings di bawahnya
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderBottomColor: '#C7C7CC', 
    marginBottom: 20, // Ruang sebelum judul section pertama
},
profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Membuat foto menjadi lingkaran
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#EBEBEB'
},
profileText: {
    justifyContent: 'center',
},
profileName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
},
profileDetail: {
    fontSize: 14,
    color: '#6D6D72',
},
  
  // Section Styles
  sectionTitle: {
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#6D6D72',
    fontSize: 13,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 8,
  },
  sectionContent: {
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#C7C7CC',
  },
  
  // Item Styles
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C7C7CC',
  },
  lastItem: {
    borderBottomWidth: 0, // Hapus border bawah untuk item terakhir di setiap bagian
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#007AFF', // Warna dasar ikon
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },
  chevron: {
    color: '#C7C7CC',
    fontSize: 20,
    fontWeight: '300',
  },
  
  // Footer
  versionText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 12,
    color: '#8A8A8E',
    lineHeight: 18,
  }
});