import * as $dara from '@darabonba/typescript';
import { ListAppSecretIdsResponseBody } from "./ListAppSecretIdsResponseBody";
export declare class ListAppSecretIdsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppSecretIdsResponseBody;
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
