import * as $dara from '@darabonba/typescript';
import { GetLoginTokenResponseBody } from "./GetLoginTokenResponseBody";
export declare class GetLoginTokenResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetLoginTokenResponseBody;
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
