import * as $dara from '@darabonba/typescript';
import { DescribeRCInstancesResponseBody } from "./DescribeRcinstancesResponseBody";
export declare class DescribeRCInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstancesResponseBody;
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
