import * as $dara from '@darabonba/typescript';
import { DescribeAvailableModelsResponseBody } from "./DescribeAvailableModelsResponseBody";
export declare class DescribeAvailableModelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableModelsResponseBody;
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
