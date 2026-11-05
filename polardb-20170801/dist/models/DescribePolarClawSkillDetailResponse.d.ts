import * as $dara from '@darabonba/typescript';
import { DescribePolarClawSkillDetailResponseBody } from "./DescribePolarClawSkillDetailResponseBody";
export declare class DescribePolarClawSkillDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarClawSkillDetailResponseBody;
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
