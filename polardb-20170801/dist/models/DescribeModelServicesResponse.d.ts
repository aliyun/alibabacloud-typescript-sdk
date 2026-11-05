import * as $dara from '@darabonba/typescript';
import { DescribeModelServicesResponseBody } from "./DescribeModelServicesResponseBody";
export declare class DescribeModelServicesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeModelServicesResponseBody;
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
