import * as $dara from '@darabonba/typescript';
import { ModifyMaskingRulesResponseBody } from "./ModifyMaskingRulesResponseBody";
export declare class ModifyMaskingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyMaskingRulesResponseBody;
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
