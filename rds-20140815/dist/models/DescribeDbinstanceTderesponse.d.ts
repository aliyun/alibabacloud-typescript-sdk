import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceTDEResponseBody } from "./DescribeDbinstanceTderesponseBody";
export declare class DescribeDBInstanceTDEResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceTDEResponseBody;
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
