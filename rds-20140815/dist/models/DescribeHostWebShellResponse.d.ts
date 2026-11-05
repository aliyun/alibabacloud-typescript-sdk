import * as $dara from '@darabonba/typescript';
import { DescribeHostWebShellResponseBody } from "./DescribeHostWebShellResponseBody";
export declare class DescribeHostWebShellResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHostWebShellResponseBody;
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
