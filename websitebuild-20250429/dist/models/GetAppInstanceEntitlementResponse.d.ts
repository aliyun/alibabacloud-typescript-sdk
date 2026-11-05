import * as $dara from '@darabonba/typescript';
import { GetAppInstanceEntitlementResponseBody } from "./GetAppInstanceEntitlementResponseBody";
export declare class GetAppInstanceEntitlementResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppInstanceEntitlementResponseBody;
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
