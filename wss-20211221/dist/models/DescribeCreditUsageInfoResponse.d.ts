import * as $dara from '@darabonba/typescript';
import { DescribeCreditUsageInfoResponseBody } from "./DescribeCreditUsageInfoResponseBody";
export declare class DescribeCreditUsageInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCreditUsageInfoResponseBody;
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
