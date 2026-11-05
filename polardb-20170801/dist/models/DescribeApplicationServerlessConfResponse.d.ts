import * as $dara from '@darabonba/typescript';
import { DescribeApplicationServerlessConfResponseBody } from "./DescribeApplicationServerlessConfResponseBody";
export declare class DescribeApplicationServerlessConfResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationServerlessConfResponseBody;
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
