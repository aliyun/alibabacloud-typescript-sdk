import * as $dara from '@darabonba/typescript';
import { DescribeMOTokenUsageSummaryResponseBody } from "./DescribeMotokenUsageSummaryResponseBody";
export declare class DescribeMOTokenUsageSummaryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMOTokenUsageSummaryResponseBody;
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
