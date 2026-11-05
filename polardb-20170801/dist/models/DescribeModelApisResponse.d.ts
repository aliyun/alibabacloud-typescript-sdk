import * as $dara from '@darabonba/typescript';
import { DescribeModelApisResponseBody } from "./DescribeModelApisResponseBody";
export declare class DescribeModelApisResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeModelApisResponseBody;
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
