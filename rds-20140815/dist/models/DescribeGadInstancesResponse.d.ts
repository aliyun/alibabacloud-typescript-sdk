import * as $dara from '@darabonba/typescript';
import { DescribeGadInstancesResponseBody } from "./DescribeGadInstancesResponseBody";
export declare class DescribeGadInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGadInstancesResponseBody;
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
