interface ILocation {
    lat: number
    lng: number
}

const getPosition = async (
    options?: PositionOptions
): Promise<GeolocationPosition> => {
    return await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}

const DistanceCalculator = async (
    defaultLocation: ILocation = { lat: 32.109333, lng: 34.855499 }
) => {
    // Tel-Aviv by default
    let { lat: lat1, lng: lng1 } = defaultLocation
    try {
        const position = await getPosition()
        lat1 = position.coords.latitude
        lng1 = position.coords.longitude
    } catch (error) {
        console.warn(
            `Can\'t get position, use default location instead: ${JSON.stringify(
                defaultLocation
            )}`,
            error
        )
    }

    // a little magic magic from stackoverflow
    /**
     * Calculates distance betwenn current location and given position.
     * Current location takes from GeoAPI, if it's not accessible - then we use diven default location
     * @param toPosision
     * @returns
     */
    const getDistince = (toPosision: ILocation): number => {
        const { lat: lat2, lng: lng2 } = toPosision

        const R = 6371 // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1)
        const dLng = deg2rad(lng2 - lng1)
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const d = Math.round(R * c) // Distance in km
        return d

        function deg2rad(deg: number): number {
            return deg * (Math.PI / 180)
        }
    }

    return getDistince
}

export default DistanceCalculator
export type { ILocation }
