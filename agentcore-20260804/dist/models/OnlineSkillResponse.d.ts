import * as $dara from '@darabonba/typescript';
import { OnlineSkillResponseBody } from "./OnlineSkillResponseBody";
export declare class OnlineSkillResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OnlineSkillResponseBody;
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
