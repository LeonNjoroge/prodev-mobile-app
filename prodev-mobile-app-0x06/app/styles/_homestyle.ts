// @/app/styles/_homestyle.ts

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    searchGroup: {
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 12,
        backgroundColor: "white",
    },

    searchFormGroup: {
        flexDirection: "row",
        backgroundColor: "#eeeeee",
        borderRadius: 16,
        padding: 8,
        alignItems: "center",
    },

    searchControlGroup: {
        flex: 1,
        paddingHorizontal: 8,
    },

    searchFormText: {
        fontSize: 14,
        color: "#333",
        fontWeight: "600",
    },

    searchControl: {
        fontSize: 16,
        paddingVertical: 6,
        paddingHorizontal: 4,
        backgroundColor: "transparent",
    },

    searchButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#1e90ff",
        alignItems: "center",
        justifyContent: "center",
    },

    filterGroup: {
        flexDirection: "row",
        paddingHorizontal: 12,
        gap: 16,
        alignItems: "center",
    },

    filterContainer: {
        alignItems: "center",
        marginVertical: 10,
        width: 64,
    },

    listingContainer: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },

    paginationContainer: {
        alignItems: "center",
        marginVertical: 24,
    },

    showMoreButton: {
        backgroundColor: "#1e90ff",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
    },

    showMoreButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
});
