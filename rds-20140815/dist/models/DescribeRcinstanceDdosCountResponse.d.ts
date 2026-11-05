import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceDdosCountResponseBody } from "./DescribeRcinstanceDdosCountResponseBody";
export declare class DescribeRCInstanceDdosCountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstanceDdosCountResponseBody;
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
