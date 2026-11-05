import * as $dara from '@darabonba/typescript';
import { DeleteDBLinkResponseBody } from "./DeleteDblinkResponseBody";
export declare class DeleteDBLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBLinkResponseBody;
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
