import * as $dara from '@darabonba/typescript';
import { GetAccountSummaryResponseBody } from "./GetAccountSummaryResponseBody";
export declare class GetAccountSummaryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccountSummaryResponseBody;
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
