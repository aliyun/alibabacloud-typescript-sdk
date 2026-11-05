import * as $dara from '@darabonba/typescript';
import { ListCredentialsResponseBody } from "./ListCredentialsResponseBody";
export declare class ListCredentialsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListCredentialsResponseBody;
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
