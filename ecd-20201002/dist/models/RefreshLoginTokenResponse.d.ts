import * as $dara from '@darabonba/typescript';
import { RefreshLoginTokenResponseBody } from "./RefreshLoginTokenResponseBody";
export declare class RefreshLoginTokenResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RefreshLoginTokenResponseBody;
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
