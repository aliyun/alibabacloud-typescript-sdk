import * as $dara from '@darabonba/typescript';
import { DescribeCommonSandboxTemplatesResponseBody } from "./DescribeCommonSandboxTemplatesResponseBody";
export declare class DescribeCommonSandboxTemplatesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCommonSandboxTemplatesResponseBody;
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
