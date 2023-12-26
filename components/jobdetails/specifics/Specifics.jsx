import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      {/* ACtual Data */}
      <View style={styles.pointsContainer}>
        {points &&
          points.map((item, index) => (
            <View key={index} style={styles.pointWrapper}>
              <View style={styles.pointDot} />
              <Text style={styles.pointText}>{item}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Specifics;
