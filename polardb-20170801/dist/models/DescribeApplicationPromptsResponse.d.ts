import * as $dara from '@darabonba/typescript';
import { DescribeApplicationPromptsResponseBody } from "./DescribeApplicationPromptsResponseBody";
export declare class DescribeApplicationPromptsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationPromptsResponseBody;
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
