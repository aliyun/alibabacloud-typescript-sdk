import * as $dara from '@darabonba/typescript';
import { ModifyPolarClawSkillResponseBody } from "./ModifyPolarClawSkillResponseBody";
export declare class ModifyPolarClawSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyPolarClawSkillResponseBody;
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
