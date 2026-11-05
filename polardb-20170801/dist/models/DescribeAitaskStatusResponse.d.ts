import * as $dara from '@darabonba/typescript';
import { DescribeAITaskStatusResponseBody } from "./DescribeAitaskStatusResponseBody";
export declare class DescribeAITaskStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAITaskStatusResponseBody;
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
