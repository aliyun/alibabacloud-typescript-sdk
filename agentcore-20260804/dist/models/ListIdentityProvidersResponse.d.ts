import * as $dara from '@darabonba/typescript';
import { ListIdentityProvidersResponseBody } from "./ListIdentityProvidersResponseBody";
export declare class ListIdentityProvidersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListIdentityProvidersResponseBody;
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
