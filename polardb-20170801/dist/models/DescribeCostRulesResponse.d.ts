import * as $dara from '@darabonba/typescript';
import { DescribeCostRulesResponseBody } from "./DescribeCostRulesResponseBody";
export declare class DescribeCostRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCostRulesResponseBody;
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
