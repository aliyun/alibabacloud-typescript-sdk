import * as $dara from '@darabonba/typescript';
import { DescribeRdsVpcsResponseBody } from "./DescribeRdsVpcsResponseBody";
export declare class DescribeRdsVpcsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRdsVpcsResponseBody;
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
