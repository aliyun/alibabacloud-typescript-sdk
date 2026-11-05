import * as $dara from '@darabonba/typescript';
import { CreateSkillDraftResponseBody } from "./CreateSkillDraftResponseBody";
export declare class CreateSkillDraftResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateSkillDraftResponseBody;
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
