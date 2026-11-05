import * as $dara from '@darabonba/typescript';
import { SubmitSkillVersionResponseBody } from "./SubmitSkillVersionResponseBody";
export declare class SubmitSkillVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SubmitSkillVersionResponseBody;
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
