import * as $dara from '@darabonba/typescript';
import { DescribeOperatorPermissionResponseBody } from "./DescribeOperatorPermissionResponseBody";
export declare class DescribeOperatorPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeOperatorPermissionResponseBody;
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
