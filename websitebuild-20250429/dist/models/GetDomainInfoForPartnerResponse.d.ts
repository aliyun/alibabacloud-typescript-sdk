import * as $dara from '@darabonba/typescript';
import { GetDomainInfoForPartnerResponseBody } from "./GetDomainInfoForPartnerResponseBody";
export declare class GetDomainInfoForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetDomainInfoForPartnerResponseBody;
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
