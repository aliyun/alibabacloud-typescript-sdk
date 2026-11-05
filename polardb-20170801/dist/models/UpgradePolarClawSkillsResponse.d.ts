import * as $dara from '@darabonba/typescript';
import { UpgradePolarClawSkillsResponseBody } from "./UpgradePolarClawSkillsResponseBody";
export declare class UpgradePolarClawSkillsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradePolarClawSkillsResponseBody;
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
