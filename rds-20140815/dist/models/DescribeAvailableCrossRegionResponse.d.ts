import * as $dara from '@darabonba/typescript';
import { DescribeAvailableCrossRegionResponseBody } from "./DescribeAvailableCrossRegionResponseBody";
export declare class DescribeAvailableCrossRegionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableCrossRegionResponseBody;
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
