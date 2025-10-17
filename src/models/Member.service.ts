import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";


class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
        .findOne({memberType: MemberType.RESTAURANT})
        .exec();

        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CEATE_FAILED);
        try {
            const result = await this.memberModel.create(input);
        // const tempResult = new this.memberModel(input);
        // const result = await tempResult.save();
        result.memberPassword = "";
        const member = result.toObject() as Member;
        return member;
        } catch(err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CEATE_FAILED);
        }
        
    }
}

export default MemberService;