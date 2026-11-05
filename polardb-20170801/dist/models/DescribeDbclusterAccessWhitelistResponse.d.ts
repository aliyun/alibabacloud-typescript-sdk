import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAccessWhitelistResponseBody } from "./DescribeDbclusterAccessWhitelistResponseBody";
export declare class DescribeDBClusterAccessWhitelistResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterAccessWhitelistResponseBody;
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
