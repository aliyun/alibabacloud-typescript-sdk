import * as $dara from '@darabonba/typescript';
import { UninstallPolarClawSkillsResponseBody } from "./UninstallPolarClawSkillsResponseBody";
export declare class UninstallPolarClawSkillsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UninstallPolarClawSkillsResponseBody;
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
