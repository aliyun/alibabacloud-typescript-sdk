import * as $dara from '@darabonba/typescript';
import { CreateDBLinkResponseBody } from "./CreateDblinkResponseBody";
export declare class CreateDBLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBLinkResponseBody;
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
