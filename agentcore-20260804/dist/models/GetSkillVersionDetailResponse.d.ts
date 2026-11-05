import * as $dara from '@darabonba/typescript';
import { GetSkillVersionDetailResponseBody } from "./GetSkillVersionDetailResponseBody";
export declare class GetSkillVersionDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetSkillVersionDetailResponseBody;
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
