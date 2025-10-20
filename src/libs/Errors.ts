export enum HttpCode {
    OK = 200, 
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

export enum Message {
        SOMETHING_WENTWRONG = "Something went wrong",
        NO_DATA_FOUND = "No data found",
        CEATE_FAILED = "Create is failed!",
        UPDATE_FAILED = "Update is failed!",

        USED_NICK_FOUND = "You are inserting already used nick or phone!",
        NO_MEMBER_NICK = "No memebr with that nick!",
        WRONG_PASSWROD = "Wrong password, please try again!"

}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}

export default Errors;