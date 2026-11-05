import * as $dara from '@darabonba/typescript';
import { GetUserTmpIdentityForPartnerResponseBody } from "./GetUserTmpIdentityForPartnerResponseBody";
export declare class GetUserTmpIdentityForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetUserTmpIdentityForPartnerResponseBody;
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
