import * as $dara from '@darabonba/typescript';
import { GrantPromotionOfferForPartnerResponseBody } from "./GrantPromotionOfferForPartnerResponseBody";
export declare class GrantPromotionOfferForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GrantPromotionOfferForPartnerResponseBody;
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
