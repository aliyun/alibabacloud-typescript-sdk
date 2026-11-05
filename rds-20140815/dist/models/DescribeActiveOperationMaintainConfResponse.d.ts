import * as $dara from '@darabonba/typescript';
import { DescribeActiveOperationMaintainConfResponseBody } from "./DescribeActiveOperationMaintainConfResponseBody";
export declare class DescribeActiveOperationMaintainConfResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeActiveOperationMaintainConfResponseBody;
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
