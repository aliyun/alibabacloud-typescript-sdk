import * as $dara from '@darabonba/typescript';
import { CreateAppLlmApiKeyForPartnerResponseBody } from "./CreateAppLlmApiKeyForPartnerResponseBody";
export declare class CreateAppLlmApiKeyForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppLlmApiKeyForPartnerResponseBody;
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
