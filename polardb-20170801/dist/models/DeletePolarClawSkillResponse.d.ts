import * as $dara from '@darabonba/typescript';
import { DeletePolarClawSkillResponseBody } from "./DeletePolarClawSkillResponseBody";
export declare class DeletePolarClawSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarClawSkillResponseBody;
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
