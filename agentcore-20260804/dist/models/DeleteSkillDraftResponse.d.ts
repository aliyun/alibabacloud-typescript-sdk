import * as $dara from '@darabonba/typescript';
import { DeleteSkillDraftResponseBody } from "./DeleteSkillDraftResponseBody";
export declare class DeleteSkillDraftResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteSkillDraftResponseBody;
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
