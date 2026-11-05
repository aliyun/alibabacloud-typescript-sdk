import * as $dara from '@darabonba/typescript';
import { ListAppCommoditySpecificationsForPartnerResponseBody } from "./ListAppCommoditySpecificationsForPartnerResponseBody";
export declare class ListAppCommoditySpecificationsForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppCommoditySpecificationsForPartnerResponseBody;
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
