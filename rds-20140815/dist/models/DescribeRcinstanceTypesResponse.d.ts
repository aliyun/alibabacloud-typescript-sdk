import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceTypesResponseBody } from "./DescribeRcinstanceTypesResponseBody";
export declare class DescribeRCInstanceTypesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstanceTypesResponseBody;
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
