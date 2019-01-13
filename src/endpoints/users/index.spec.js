const handlers = ("./index");

describe("Endpoints", () => {
  describe("users", () => {
    describe("get", () => {
      it("return to user json", () => {
        const axios = {
          get: jest.fn().mockResolvedValue({ data: 1})
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        handlers({ axios }).get({}, res)
      })
    })
  })
})