import * as $dara from '@darabonba/typescript';
import { DescribeMaskingRulesResponseBody } from "./DescribeMaskingRulesResponseBody";
export declare class DescribeMaskingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMaskingRulesResponseBody;
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
