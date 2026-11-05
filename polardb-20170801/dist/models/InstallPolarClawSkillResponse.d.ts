import * as $dara from '@darabonba/typescript';
import { InstallPolarClawSkillResponseBody } from "./InstallPolarClawSkillResponseBody";
export declare class InstallPolarClawSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: InstallPolarClawSkillResponseBody;
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
