import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZonesResponseBody } from "./DescribeAvailableZonesResponseBody";
export declare class DescribeAvailableZonesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableZonesResponseBody;
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
