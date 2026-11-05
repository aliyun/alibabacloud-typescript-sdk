import * as $dara from '@darabonba/typescript';
import { DescribeWhitelistIpsResponseBody } from "./DescribeWhitelistIpsResponseBody";
export declare class DescribeWhitelistIpsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeWhitelistIpsResponseBody;
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
