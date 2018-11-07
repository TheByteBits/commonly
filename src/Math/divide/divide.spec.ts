import divide from "./divide";


describe(`Module "Math" -> Function "multiply"`, () => {
    it("should preform addition of two numbers.", () => {
        expect(divide(2, 2))
            .toBe(1)

        expect(divide(25, 75))
            .toBe(0.3333333333333333)

        expect(divide(75, 25))
            .toBe(3)
    })

    it("should be a curried function.", () => {
        expect(() => divide(2)(2))
            .not.toThrow()
    })
})