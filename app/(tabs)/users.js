import { StyleSheet, Text, View, Image } from "react-native";

export default function Users() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={{ uri: 'https://png.pngtree.com/png-vector/20220910/ourmid/pngtree-purple-gradient-coming-soon-offer-sticker-design-free-vector-download-png-image_6144033.png' }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    width: 450, 
    height: 450, 
    borderRadius: 50,
    marginBottom: 20, 
    aspectRatio: 1,
    
  },
});
