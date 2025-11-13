import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
// '@/components/themed' not found in your project — provide a lightweight fallback
const ThemedView = View;
const ThemedText: React.FC<any> = (props) => {
  const { type, ...rest } = props as any; // strip custom 'type' prop used in your code
  return <Text {...rest} />;
};

import { Colors } from '@/constants/theme';

// type Feather name untuk menghindari TS error "string not assignable"
type FeatherName = React.ComponentProps<typeof Feather>['name'];

export default function ExploreScreen() {
  // contoh data yang sudah bertipe benar
  const education: {
    degree: string;
    school: string;
    year: string;
    gpa: string;
    icon: FeatherName;
    color?: string;
  }[] = [
    {
      degree: 'S1 Teknik Informatika',
      school: 'Universitas Anda',
      year: '2025 - Sekarang',
      gpa: '3.75',
      icon: 'award',
      color: '#662249',
    },
    {
      degree: 'SMA Jurusan IPA',
      school: 'MAN2 Kota Cirebon',
      year: '2018 - 2021',
      gpa: '88.5',
      icon: 'book',
      color: '#662249',
    },
  ];

  const projects: {
    title: string;
    description: string;
    tech: string[];
    status: string;
    icon: FeatherName;
    color: string;
  }[] = [
    {
      title: 'Portfolio Mobile App',
      description: 'Aplikasi portfolio mobile menggunakan React Native dan Expo Router',
      tech: ['React Native', 'TypeScript', 'Expo'],
      status: 'Completed',
      icon: 'smartphone',
      color: '#662249',
    },
    {
      title: 'E-Commerce App',
      description: 'Aplikasi e-commerce dengan fitur cart, payment, dan order tracking',
      tech: ['React Native', 'Firebase', 'Stripe'],
      status: 'In Progress',
      icon: 'shopping-cart',
      color: '#662249',
    },
  ];

  const achievements = [
    {
      title: 'Project web',
      org: 'Coding Competition 2023',
      icon: 'code' as const, // Feather icon for code
      color: '#662249',
    },
    {
      title: 'Certified dicoding',
      org: 'Meta Blueprint 2024',
      icon: 'award' as const, // Feather icon for certification
      color: '#662249',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Projects */}
      <ThemedView style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="briefcase" size={24} color="#662249" />
          <ThemedText type="subtitle" style={styles.sectionTitle}>Projects</ThemedText>
        </View>

        {projects.map((project, i) => (
          <TouchableOpacity key={i} style={styles.projectCard} activeOpacity={0.9}>
            <View style={[styles.projectIcon, { backgroundColor: project.color }]}>
              <Feather name={project.icon} size={24} color="#fff" />
            </View>
            <View style={styles.projectContent}>
              <View style={styles.projectHeader}>
                <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
                <View style={styles.statusBadge}>
                  <ThemedText style={styles.statusText}>{project.status}</ThemedText>
                </View>
              </View>
              <ThemedText style={styles.projectDesc}>{project.description}</ThemedText>
              <View style={styles.techStack}>
                {project.tech.map((t, idx) => (
                  <View key={idx} style={styles.techBadge}>
                    <ThemedText style={styles.techText}>{t}</ThemedText>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ThemedView>

      {/* Education */}
      <ThemedView style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="book-open" size={24} color="#662249" />
          <ThemedText type="subtitle" style={styles.sectionTitle}>Pendidikan</ThemedText>
        </View>

        {education.map((edu, index) => (
          <View key={index} style={styles.educationCard}>
            <View style={[styles.eduIconCircle, { backgroundColor: edu.color ?? '#662249' }]}>
              <Feather name={edu.icon} size={24} color="#fff" />
            </View>
            <View style={styles.eduContent}>
              <ThemedText style={styles.eduDegree}>{edu.degree}</ThemedText>
              <ThemedText style={styles.eduSchool}>{edu.school}</ThemedText>
              <View style={styles.eduFooter}>
                <View style={styles.eduYear}>
                  <Feather name="calendar" size={14} color="#666" />
                  <ThemedText style={styles.eduYearText}>{edu.year}</ThemedText>
                </View>
                <View style={styles.gpaContainer}>
                  <Feather name="award" size={14} color="#4caf50" />
                  <ThemedText style={styles.gpaText}>GPA: {edu.gpa}</ThemedText>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ThemedView>

      {/* Achievements */}
      <ThemedView style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="star" size={24} color="#662249" />
          <ThemedText type="subtitle" style={styles.sectionTitle}>Achievements</ThemedText>
        </View>

        <View style={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                <Feather name={achievement.icon} size={32} color="#fff" />
              </View>
              <ThemedText style={styles.achievementTitle}>{achievement.title}</ThemedText>
              <ThemedText style={styles.achievementOrg}>{achievement.org}</ThemedText>
            </View>
          ))}
        </View>
      </ThemedView>

      {/* CTA */}
      <ThemedView style={styles.ctaCard}>
        <View style={styles.ctaTop}>
          <View style={styles.ctaIconCircle}>
            <Feather name="send" size={18} color="#fff" />
          </View>
          <ThemedText type="title" style={styles.ctaTitle}>Tertarik bekerja sama?</ThemedText>
        </View>

        <ThemedText style={styles.ctaSubtitle}>
          Saya terbuka untuk proyek freelance dan kolaborasi menarik!
        </ThemedText>

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => Linking.openURL('mailto:muhsinlabibul.com')}
        >
          <ThemedText style={styles.ctaButtonText}>Hubungi Saya</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  section: { marginHorizontal: 16, marginTop: 12 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { marginLeft: 8, fontSize: 16, fontWeight: '700', color: '#222' },

  projectCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  projectIcon: { width: 52, height: 52, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  projectContent: { flex: 1 },
  projectHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  projectTitle: { fontSize: 16, fontWeight: '700', color: '#222' },
  statusBadge: { backgroundColor: '#662249', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  statusText: { color: '#fff', fontWeight: '600' },
  projectDesc: { fontSize: 13, color: '#444', marginVertical: 8, lineHeight: 18 },
  techStack: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  techBadge: { backgroundColor: '#f1f5ff', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, marginRight: 8, marginTop: 6 },
  techText: { color: '#334', fontWeight: '600' },

  educationCard: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, alignItems: 'center' },
  eduIconCircle: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  eduContent: { flex: 1 },
  eduDegree: { fontSize: 15, fontWeight: '700', color: '#222' },
  eduSchool: { fontSize: 13, color: '#666', marginTop: 4 },
  eduFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  eduYear: { flexDirection: 'row', alignItems: 'center' },
  eduYearText: { marginLeft: 6, color: '#666', fontSize: 12 },
  gpaContainer: { flexDirection: 'row', alignItems: 'center' },
  gpaText: { marginLeft: 6, color: '#662249', fontWeight: '700' },

  achievementsGrid: { marginTop: 8 },
  achievementCard: {
    backgroundColor: '#662249',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    alignItems: 'center',
  },
  achievementIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 6,
  },
  achievementOrg: {
    color: '#fff',
    opacity: 0.9,
  },

  ctaCard: { backgroundColor: '#fff', borderRadius: 14, padding: 18, marginHorizontal: 16, marginVertical: 12 },
  ctaTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  ctaIconCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#662249', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  ctaTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  ctaSubtitle: { fontSize: 14, color: '#444', marginBottom: 12, lineHeight: 20 },
  ctaButton: { backgroundColor: '#667eea', paddingVertical: 10, paddingHorizontal: 18, borderRadius: 10, alignSelf: 'flex-start' },
  ctaButtonText: { color: '#fff', fontWeight: '600' },
});