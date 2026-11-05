import * as $dara from '@darabonba/typescript';
import { DescribeAccountsZonalResponseBody } from "./DescribeAccountsZonalResponseBody";
export declare class DescribeAccountsZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAccountsZonalResponseBody;
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
