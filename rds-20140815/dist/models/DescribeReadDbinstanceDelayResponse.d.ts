import * as $dara from '@darabonba/typescript';
import { DescribeReadDBInstanceDelayResponseBody } from "./DescribeReadDbinstanceDelayResponseBody";
export declare class DescribeReadDBInstanceDelayResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeReadDBInstanceDelayResponseBody;
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
