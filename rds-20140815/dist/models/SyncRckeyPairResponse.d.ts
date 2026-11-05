import * as $dara from '@darabonba/typescript';
import { SyncRCKeyPairResponseBody } from "./SyncRckeyPairResponseBody";
export declare class SyncRCKeyPairResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SyncRCKeyPairResponseBody;
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
