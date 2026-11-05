import * as $dara from '@darabonba/typescript';
import { ListSAMLProvidersResponseBody } from "./ListSamlprovidersResponseBody";
export declare class ListSAMLProvidersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListSAMLProvidersResponseBody;
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
