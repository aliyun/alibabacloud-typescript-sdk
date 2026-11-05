import * as $dara from '@darabonba/typescript';
import { DescribeSQLExplorerPolicyResponseBody } from "./DescribeSqlexplorerPolicyResponseBody";
export declare class DescribeSQLExplorerPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLExplorerPolicyResponseBody;
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
