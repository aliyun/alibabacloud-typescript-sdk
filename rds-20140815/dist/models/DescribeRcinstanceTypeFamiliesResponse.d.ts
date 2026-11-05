import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceTypeFamiliesResponseBody } from "./DescribeRcinstanceTypeFamiliesResponseBody";
export declare class DescribeRCInstanceTypeFamiliesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstanceTypeFamiliesResponseBody;
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
