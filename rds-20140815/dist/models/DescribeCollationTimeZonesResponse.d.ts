import * as $dara from '@darabonba/typescript';
import { DescribeCollationTimeZonesResponseBody } from "./DescribeCollationTimeZonesResponseBody";
export declare class DescribeCollationTimeZonesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCollationTimeZonesResponseBody;
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
