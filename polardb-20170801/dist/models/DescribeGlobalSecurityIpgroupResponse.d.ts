import * as $dara from '@darabonba/typescript';
import { DescribeGlobalSecurityIPGroupResponseBody } from "./DescribeGlobalSecurityIpgroupResponseBody";
export declare class DescribeGlobalSecurityIPGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGlobalSecurityIPGroupResponseBody;
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
