import * as $dara from '@darabonba/typescript';
import { UpdateSkillResponseBody } from "./UpdateSkillResponseBody";
export declare class UpdateSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateSkillResponseBody;
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
