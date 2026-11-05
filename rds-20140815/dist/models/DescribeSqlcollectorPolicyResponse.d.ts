import * as $dara from '@darabonba/typescript';
import { DescribeSQLCollectorPolicyResponseBody } from "./DescribeSqlcollectorPolicyResponseBody";
export declare class DescribeSQLCollectorPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLCollectorPolicyResponseBody;
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
