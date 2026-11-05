import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAuditLogCollectorResponseBody } from "./DescribeDbclusterAuditLogCollectorResponseBody";
export declare class DescribeDBClusterAuditLogCollectorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterAuditLogCollectorResponseBody;
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
