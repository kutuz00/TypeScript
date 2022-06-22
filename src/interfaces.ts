export interface SearchFormData {
    place: string,
    checkInDate: Date,
    checkOutDate: Date,
    maxPrice?: number

}
export interface Place {
    bookedDates: number[],
    name: string,
    description: string,
    id: number,
    image: string,
    price: number,
    remoteness: number
}