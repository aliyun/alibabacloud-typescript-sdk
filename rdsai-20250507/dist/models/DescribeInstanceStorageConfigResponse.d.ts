import * as $dara from '@darabonba/typescript';
import { DescribeInstanceStorageConfigResponseBody } from "./DescribeInstanceStorageConfigResponseBody";
export declare class DescribeInstanceStorageConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceStorageConfigResponseBody;
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
