import * as $dara from '@darabonba/typescript';
import { GetIcpFilingInfoForPartnerResponseBody } from "./GetIcpFilingInfoForPartnerResponseBody";
export declare class GetIcpFilingInfoForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetIcpFilingInfoForPartnerResponseBody;
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
