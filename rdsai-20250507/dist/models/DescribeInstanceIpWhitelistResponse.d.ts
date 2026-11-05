import * as $dara from '@darabonba/typescript';
import { DescribeInstanceIpWhitelistResponseBody } from "./DescribeInstanceIpWhitelistResponseBody";
export declare class DescribeInstanceIpWhitelistResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceIpWhitelistResponseBody;
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
