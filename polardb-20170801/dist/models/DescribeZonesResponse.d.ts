import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBody } from "./DescribeZonesResponseBody";
export declare class DescribeZonesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeZonesResponseBody;
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
