import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoForChannelResponseBody } from "./DescribeDbinstanceNetInfoForChannelResponseBody";
export declare class DescribeDBInstanceNetInfoForChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceNetInfoForChannelResponseBody;
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
