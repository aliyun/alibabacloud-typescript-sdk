import * as $dara from '@darabonba/typescript';
import { DescribeAppInstanceAttributeResponseBody } from "./DescribeAppInstanceAttributeResponseBody";
export declare class DescribeAppInstanceAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAppInstanceAttributeResponseBody;
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
