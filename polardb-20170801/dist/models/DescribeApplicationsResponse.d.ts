import * as $dara from '@darabonba/typescript';
import { DescribeApplicationsResponseBody } from "./DescribeApplicationsResponseBody";
export declare class DescribeApplicationsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationsResponseBody;
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
