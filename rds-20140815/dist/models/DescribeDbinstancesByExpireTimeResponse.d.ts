import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesByExpireTimeResponseBody } from "./DescribeDbinstancesByExpireTimeResponseBody";
export declare class DescribeDBInstancesByExpireTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancesByExpireTimeResponseBody;
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
