import * as $dara from '@darabonba/typescript';
import { GetMiniAppAuthUrlResponseBody } from "./GetMiniAppAuthUrlResponseBody";
export declare class GetMiniAppAuthUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMiniAppAuthUrlResponseBody;
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
