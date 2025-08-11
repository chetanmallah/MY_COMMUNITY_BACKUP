// // MarriageStyles.js
// import { StyleSheet } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import {
//   fontSize,
//   isPixel2,
//   isSmallDevice,
//   isMediumDevice,
//   isLargeDevice,
// } from "../../utils/responsiveHelper";

// const MarriageStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: "1%"
//   },
//   scrollContent: {
//     paddingHorizontal: wp(isPixel2 ? "5%" : isLargeDevice ? "12%" : "8%"),
    
//     paddingBottom: hp("5%"),
//   },
//   header: {
//     marginBottom: hp("4%"),
//   },
//   title: {
//     fontSize: fontSize(36), // 🔥 Pixel 2 auto-adjust handled in fontSize()
//     fontWeight: "700",
//     color: "#000",
//     marginBottom: hp("1%"),
//     textAlign: "center",
//     marginTop: hp(isPixel2 ? "5%" : "8%"),
//   },
//   subtitle: {
//     fontSize: fontSize(16),
//     color: "#666",
//     textAlign: "center",
//   },
//   section: {
//     marginBottom: hp("3.5%"),
//   },
//   sectionTitle: {
//     fontSize: fontSize(17),
//     fontWeight: "600",
//     color: "#000",
//     marginBottom: hp("2%"),
//   },
//   genderRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: wp(isPixel2 ? "3%" : "4%"),
//   },
//   genderButton: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: hp(isPixel2 ? "1.8%" : "2.2%"),
//     borderRadius: wp("3%"),
//     backgroundColor: "#f5f5f5",
//   },
//   genderButtonSelected: {
//     backgroundColor: "#000",
//   },
//   genderText: {
//     fontSize: fontSize(16),
//     fontWeight: "500",
//     color: "#000",
//     marginLeft: wp("3%"),
//   },
//   genderTextSelected: {
//     color: "#fff",
//   },
//   ageRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: wp(isPixel2 ? "2%" : "3%"),
//   },
//   ageInput: {
//     flex: 1,
//     borderBottomWidth: 1,
//     borderColor: "#ddd",
//     paddingVertical: hp(isPixel2 ? "1.3%" : "1.7%"),
//     fontSize: fontSize(16.5),
//   },
//   ageSeparator: {
//     fontSize: fontSize(16),
//     color: "#000",
//     fontWeight: "500",
//   },
//   radioGroup: {
//     marginLeft: wp("-3%"),
//   },
//   radioOption: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: hp(isPixel2 ? "1%" : "1.3%"),
//   },
//   radioText: {
//     fontSize: fontSize(16.5),
//     color: "#000",
//     marginLeft: wp("3%"),
//   },
//   searchButton: {
//     backgroundColor: "#000",
//     paddingVertical: hp(isPixel2 ? "2%" : "2.5%"),
//     borderRadius: wp("3%"),
//     alignItems: "center",
//     marginTop: hp("3%"),
//   },
//   searchButtonDisabled: {
//     backgroundColor: "#aaa",
//   },
//   searchButtonText: {
//     color: "#fff",
//     fontSize: fontSize(17),
//     fontWeight: "600",
//   },
// });

// export default MarriageStyles;

import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  fontSize,
  isPixel2,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
} from "../../utils/responsiveHelper";

const MarriageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  scrollContent: {
    paddingHorizontal: wp(isPixel2 ? "5%" : isLargeDevice ? "12%" : "8%"),
    paddingBottom: hp("6%"),
    paddingTop: hp(isLargeDevice ? "8%" : "6%"), // ⬅ More top padding to push content down
  },

  header: {
    marginBottom: hp("4%"),
    alignItems: "center",
  },

  title: {
    marginTop: hp(isPixel2 ? "5%" : "5%"),
    fontSize: fontSize(40), // ⬅ Bigger hero text
    fontWeight: "800",
    color: "#111827",
    marginBottom: hp("1%"),
    textAlign: "center",
    letterSpacing: 0.4,
  },

  subtitle: {
    fontSize: fontSize(17),
    color: "#6b7280",
    textAlign: "center",
  },

  section: {
    marginBottom: hp("3.5%"),
  },

  sectionTitle: {
    fontSize: fontSize(18),
    fontWeight: "600",
    color: "#111827",
    marginBottom: hp("1.8%"),
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wp(isPixel2 ? "3%" : "4%"),
  },

  genderButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp("2.4%"),
    borderRadius: wp("3%"),
    backgroundColor: "#f3f4f6",

    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
      },
    }),
  },

  genderButtonSelected: {
    backgroundColor: "#111827",
  },

  genderText: {
    fontSize: fontSize(17),
    fontWeight: "500",
    color: "#111827",
    marginLeft: wp("3%"),
  },

  genderTextSelected: {
    color: "#fff",
  },

  ageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%"),
  },

  ageInput: {
    flex: 1,
    borderBottomWidth: 1.2,
    borderColor: "#d1d5db",
    paddingVertical: hp("1.5%"),
    fontSize: fontSize(17),
    color: "#111827",
  },

  ageSeparator: {
    fontSize: fontSize(17),
    color: "#111827",
    fontWeight: "500",
  },

  radioGroup: {
    marginLeft: wp("-2%"),
  },

  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1.3%"),
  },

  radioText: {
    fontSize: fontSize(17),
    color: "#111827",
    marginLeft: wp("3%"),
  },

  searchButton: {
    backgroundColor: "#111827",
    paddingVertical: hp("2.5%"),
    borderRadius: wp("3%"),
    alignItems: "center",
    marginTop: hp("4%"),

    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
      },
    }),
  },

  searchButtonDisabled: {
    backgroundColor: "#9ca3af",
  },

  searchButtonText: {
    color: "#fff",
    fontSize: fontSize(18),
    fontWeight: "600",
    letterSpacing: 0.4,
  },
});

export default MarriageStyles;
