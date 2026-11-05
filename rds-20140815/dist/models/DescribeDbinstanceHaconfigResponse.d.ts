import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceHAConfigResponseBody } from "./DescribeDbinstanceHaconfigResponseBody";
export declare class DescribeDBInstanceHAConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceHAConfigResponseBody;
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
