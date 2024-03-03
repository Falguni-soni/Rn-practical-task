export const main = () => ({
    flex: 1
})
export const cardContainer = (bgColor) => ({
    flex: 1,
    backgroundColor: bgColor ?? '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15
})
export const ImageStyle = (height, width) => ({
    height: height * 0.24,
    width: width * 0.88,
    borderRadius: 10
})
export const titleStyle = () => ({
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingVertical: 3,
})
export const subTitleStyle = () => ({
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: '500',
    textTransform: 'capitalize',
})
export const infoContainer = () => ({
    paddingTop: 10,
    flexDirection: "row",
})
export const locationInfo = () => ({
    flex: 1,
    paddingLeft: 15
})
export const chapterText = () => ({
    fontSize: 15,
    color: "#000000",
    fontWeight: 'bold',
    textTransform: 'capitalize'
})