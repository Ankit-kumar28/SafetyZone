import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const features = [
  { name: 'News', route: 'News', icon: '📰' },
  { name: 'Features', route: 'Features', icon: '✨' },
  { name: 'Self Ride', route: 'SelfRide', icon: '🚖' },
  { name: 'Self Defense', route: 'SelfDefense', icon: '🥋' },
  { name: 'Legal Rights', route: 'LegalRights', icon: '⚖️' },
  { name: 'Community', route: 'Community', icon: '👥' },
];

const dummyMenuItems = [
 
  { name: 'Language change', icon: '🌐' },
  { name: 'Share app link', icon: '🔗' },
  { name: 'FAQ', icon: '❓' },
  { name: 'Privacy policy', icon: '🛡️' },
  { name: 'Terms of use', icon: '🤝' },
  { name: 'Settings', icon: '⚙️' },
  { name: 'About us', icon: 'ℹ️' },
  { name: 'Contact us', icon: '☎️' },
  { name: 'Logout', icon: '🚪' },
];

const Homescreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* Header with Hamburger, Title, and Profile */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.hamburger}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>SheSafe User</Text>

        <TouchableOpacity
          onPress={() => {
            // Dummy tap handler
            alert('Profile tapped!');
          }}
        >
          {/* You can replace this Text with Image for a real avatar */}
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Grid of 2x3 */}
        <View style={styles.grid}>
          {features.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => navigation.navigate(item.route)}
            >
              <Text style={styles.emoji}>{item.icon}</Text>
              <Text style={styles.boxText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Full-width last box */}
        <TouchableOpacity
          style={styles.fullBox}
          onPress={() => navigation.navigate('AI')}
        >
          <Text style={styles.emoji}>🤖</Text>
          <Text style={styles.boxText}>AI Sheli</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Dummy Menu Modal */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Menu</Text>
              <Pressable onPress={() => setMenuVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </Pressable>
            </View>

            {dummyMenuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuRow}
                onPress={() => {}}
              >
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuLabel}>{item.name}</Text>
                <Text style={styles.menuArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1f3c88',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  hamburger: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileIcon: {
    fontSize: 24,
    color: '#fff',
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    paddingVertical: 24,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#339af0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullBox: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    paddingVertical: 24,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#339af0',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
    marginBottom: 6,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginTop: 60,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d63384',
  },
  closeButton: {
    fontSize: 24,
    color: '#333',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    fontSize: 20,
    width: 30,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  menuArrow: {
    fontSize: 18,
    color: '#999',
  },
});
