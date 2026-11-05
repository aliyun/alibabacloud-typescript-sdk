import * as $dara from '@darabonba/typescript';
import { DescribeHALogsResponseBody } from "./DescribeHalogsResponseBody";
export declare class DescribeHALogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHALogsResponseBody;
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
