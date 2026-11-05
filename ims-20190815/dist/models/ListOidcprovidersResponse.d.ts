import * as $dara from '@darabonba/typescript';
import { ListOIDCProvidersResponseBody } from "./ListOidcprovidersResponseBody";
export declare class ListOIDCProvidersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListOIDCProvidersResponseBody;
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
