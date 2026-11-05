import * as $dara from '@darabonba/typescript';
import { DescribeAppDomainDnsRecordResponseBody } from "./DescribeAppDomainDnsRecordResponseBody";
export declare class DescribeAppDomainDnsRecordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAppDomainDnsRecordResponseBody;
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
