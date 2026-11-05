import * as $dara from '@darabonba/typescript';
import { ListPredefinedScopesResponseBody } from "./ListPredefinedScopesResponseBody";
export declare class ListPredefinedScopesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPredefinedScopesResponseBody;
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
