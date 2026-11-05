import * as $dara from '@darabonba/typescript';
import { DescribeAccountMaskingPrivilegeResponseBody } from "./DescribeAccountMaskingPrivilegeResponseBody";
export declare class DescribeAccountMaskingPrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAccountMaskingPrivilegeResponseBody;
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
