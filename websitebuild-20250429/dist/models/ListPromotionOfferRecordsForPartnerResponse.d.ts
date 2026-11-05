import * as $dara from '@darabonba/typescript';
import { ListPromotionOfferRecordsForPartnerResponseBody } from "./ListPromotionOfferRecordsForPartnerResponseBody";
export declare class ListPromotionOfferRecordsForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPromotionOfferRecordsForPartnerResponseBody;
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
