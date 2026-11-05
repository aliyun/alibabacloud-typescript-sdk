import * as $dara from '@darabonba/typescript';
import { ListAppInstanceDomainsResponseBody } from "./ListAppInstanceDomainsResponseBody";
export declare class ListAppInstanceDomainsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppInstanceDomainsResponseBody;
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
