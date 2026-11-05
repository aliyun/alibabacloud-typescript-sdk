import * as $dara from '@darabonba/typescript';
import { ListAppCommoditySpecificationsV2ForPartnerResponseBody } from "./ListAppCommoditySpecificationsV2forPartnerResponseBody";
export declare class ListAppCommoditySpecificationsV2ForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppCommoditySpecificationsV2ForPartnerResponseBody;
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
