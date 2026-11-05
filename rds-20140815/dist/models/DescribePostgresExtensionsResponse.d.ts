import * as $dara from '@darabonba/typescript';
import { DescribePostgresExtensionsResponseBody } from "./DescribePostgresExtensionsResponseBody";
export declare class DescribePostgresExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePostgresExtensionsResponseBody;
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
