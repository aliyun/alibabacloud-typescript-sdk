import * as $dara from '@darabonba/typescript';
import { DescribeAvailableCrossRegionsResponseBody } from "./DescribeAvailableCrossRegionsResponseBody";
export declare class DescribeAvailableCrossRegionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableCrossRegionsResponseBody;
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
