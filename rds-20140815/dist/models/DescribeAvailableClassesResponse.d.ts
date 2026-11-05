import * as $dara from '@darabonba/typescript';
import { DescribeAvailableClassesResponseBody } from "./DescribeAvailableClassesResponseBody";
export declare class DescribeAvailableClassesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableClassesResponseBody;
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
