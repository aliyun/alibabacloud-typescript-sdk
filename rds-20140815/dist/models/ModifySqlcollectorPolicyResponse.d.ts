import * as $dara from '@darabonba/typescript';
import { ModifySQLCollectorPolicyResponseBody } from "./ModifySqlcollectorPolicyResponseBody";
export declare class ModifySQLCollectorPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifySQLCollectorPolicyResponseBody;
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
