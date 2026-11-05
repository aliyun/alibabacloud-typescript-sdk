import * as $dara from '@darabonba/typescript';
import { DescribeApplicationSessionIdsResponseBody } from "./DescribeApplicationSessionIdsResponseBody";
export declare class DescribeApplicationSessionIdsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationSessionIdsResponseBody;
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
