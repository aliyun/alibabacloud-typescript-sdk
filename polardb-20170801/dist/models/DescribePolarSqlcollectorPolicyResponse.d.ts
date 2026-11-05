import * as $dara from '@darabonba/typescript';
import { DescribePolarSQLCollectorPolicyResponseBody } from "./DescribePolarSqlcollectorPolicyResponseBody";
export declare class DescribePolarSQLCollectorPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarSQLCollectorPolicyResponseBody;
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
