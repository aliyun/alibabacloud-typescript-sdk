import * as $dara from '@darabonba/typescript';
import { CreateMaskingRulesResponseBody } from "./CreateMaskingRulesResponseBody";
export declare class CreateMaskingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateMaskingRulesResponseBody;
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
