import * as $dara from '@darabonba/typescript';
import { DeleteMaskingRulesResponseBody } from "./DeleteMaskingRulesResponseBody";
export declare class DeleteMaskingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteMaskingRulesResponseBody;
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
