import * as $dara from '@darabonba/typescript';
import { SetSecurityPreferenceResponseBody } from "./SetSecurityPreferenceResponseBody";
export declare class SetSecurityPreferenceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetSecurityPreferenceResponseBody;
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
