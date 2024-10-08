import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://cdn-icons-png.flaticon.com/128/484/484624.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      {/* Job title */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      {/* Company Name */}
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}> {location} </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
