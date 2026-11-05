import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBody } from "./DescribeAccountsResponseBody";
export declare class DescribeAccountsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAccountsResponseBody;
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
