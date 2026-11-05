import * as $dara from '@darabonba/typescript';
import { DescribeAvailableRecoveryTimeResponseBody } from "./DescribeAvailableRecoveryTimeResponseBody";
export declare class DescribeAvailableRecoveryTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableRecoveryTimeResponseBody;
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
