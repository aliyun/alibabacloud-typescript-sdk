import * as $dara from '@darabonba/typescript';
import { UpdatePolarClawSkillResponseBody } from "./UpdatePolarClawSkillResponseBody";
export declare class UpdatePolarClawSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePolarClawSkillResponseBody;
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
