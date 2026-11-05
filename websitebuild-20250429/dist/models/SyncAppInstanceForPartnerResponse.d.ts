import * as $dara from '@darabonba/typescript';
import { SyncAppInstanceForPartnerResponseBody } from "./SyncAppInstanceForPartnerResponseBody";
export declare class SyncAppInstanceForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SyncAppInstanceForPartnerResponseBody;
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
