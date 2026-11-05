import * as $dara from '@darabonba/typescript';
import { SetAgentCreditQuotaResponseBody } from "./SetAgentCreditQuotaResponseBody";
export declare class SetAgentCreditQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetAgentCreditQuotaResponseBody;
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
