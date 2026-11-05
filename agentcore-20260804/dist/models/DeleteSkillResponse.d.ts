import * as $dara from '@darabonba/typescript';
import { DeleteSkillResponseBody } from "./DeleteSkillResponseBody";
export declare class DeleteSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteSkillResponseBody;
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
