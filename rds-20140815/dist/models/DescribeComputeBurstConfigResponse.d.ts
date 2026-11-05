import * as $dara from '@darabonba/typescript';
import { DescribeComputeBurstConfigResponseBody } from "./DescribeComputeBurstConfigResponseBody";
export declare class DescribeComputeBurstConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeComputeBurstConfigResponseBody;
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
