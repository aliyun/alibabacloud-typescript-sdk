import * as $dara from '@darabonba/typescript';
import { OfflineSkillResponseBody } from "./OfflineSkillResponseBody";
export declare class OfflineSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OfflineSkillResponseBody;
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
