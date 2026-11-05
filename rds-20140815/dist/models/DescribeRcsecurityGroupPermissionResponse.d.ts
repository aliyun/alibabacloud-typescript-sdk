import * as $dara from '@darabonba/typescript';
import { DescribeRCSecurityGroupPermissionResponseBody } from "./DescribeRcsecurityGroupPermissionResponseBody";
export declare class DescribeRCSecurityGroupPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCSecurityGroupPermissionResponseBody;
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
