import * as $dara from '@darabonba/typescript';
import { GetSkillDetailResponseBody } from "./GetSkillDetailResponseBody";
export declare class GetSkillDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetSkillDetailResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
