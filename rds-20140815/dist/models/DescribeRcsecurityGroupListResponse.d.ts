import * as $dara from '@darabonba/typescript';
import { DescribeRCSecurityGroupListResponseBody } from "./DescribeRcsecurityGroupListResponseBody";
export declare class DescribeRCSecurityGroupListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCSecurityGroupListResponseBody;
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
