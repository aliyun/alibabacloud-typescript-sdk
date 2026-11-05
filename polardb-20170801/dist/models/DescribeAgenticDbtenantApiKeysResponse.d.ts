import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBTenantApiKeysResponseBody } from "./DescribeAgenticDbtenantApiKeysResponseBody";
export declare class DescribeAgenticDBTenantApiKeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBTenantApiKeysResponseBody;
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
