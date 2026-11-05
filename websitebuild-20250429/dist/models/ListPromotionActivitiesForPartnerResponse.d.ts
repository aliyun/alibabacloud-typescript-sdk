import * as $dara from '@darabonba/typescript';
import { ListPromotionActivitiesForPartnerResponseBody } from "./ListPromotionActivitiesForPartnerResponseBody";
export declare class ListPromotionActivitiesForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPromotionActivitiesForPartnerResponseBody;
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
