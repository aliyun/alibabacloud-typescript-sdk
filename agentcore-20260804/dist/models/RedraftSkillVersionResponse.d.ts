import * as $dara from '@darabonba/typescript';
import { RedraftSkillVersionResponseBody } from "./RedraftSkillVersionResponseBody";
export declare class RedraftSkillVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RedraftSkillVersionResponseBody;
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
