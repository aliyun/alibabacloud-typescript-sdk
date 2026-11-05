import * as $dara from '@darabonba/typescript';
import { RefundAppInstanceForPartnerResponseBody } from "./RefundAppInstanceForPartnerResponseBody";
export declare class RefundAppInstanceForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RefundAppInstanceForPartnerResponseBody;
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
