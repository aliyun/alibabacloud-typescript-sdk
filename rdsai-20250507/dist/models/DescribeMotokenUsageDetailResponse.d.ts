import * as $dara from '@darabonba/typescript';
import { DescribeMOTokenUsageDetailResponseBody } from "./DescribeMotokenUsageDetailResponseBody";
export declare class DescribeMOTokenUsageDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMOTokenUsageDetailResponseBody;
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
