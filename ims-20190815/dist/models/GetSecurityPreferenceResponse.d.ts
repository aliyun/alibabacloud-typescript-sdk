import * as $dara from '@darabonba/typescript';
import { GetSecurityPreferenceResponseBody } from "./GetSecurityPreferenceResponseBody";
export declare class GetSecurityPreferenceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetSecurityPreferenceResponseBody;
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
