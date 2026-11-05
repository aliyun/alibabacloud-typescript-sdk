import * as $dara from '@darabonba/typescript';
import { DescribeLocalAvailableRecoveryTimeResponseBody } from "./DescribeLocalAvailableRecoveryTimeResponseBody";
export declare class DescribeLocalAvailableRecoveryTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLocalAvailableRecoveryTimeResponseBody;
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
