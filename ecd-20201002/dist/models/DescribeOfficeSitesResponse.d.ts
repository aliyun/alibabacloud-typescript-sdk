import * as $dara from '@darabonba/typescript';
import { DescribeOfficeSitesResponseBody } from "./DescribeOfficeSitesResponseBody";
export declare class DescribeOfficeSitesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeOfficeSitesResponseBody;
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
