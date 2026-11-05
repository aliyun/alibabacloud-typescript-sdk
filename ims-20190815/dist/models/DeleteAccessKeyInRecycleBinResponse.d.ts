import * as $dara from '@darabonba/typescript';
import { DeleteAccessKeyInRecycleBinResponseBody } from "./DeleteAccessKeyInRecycleBinResponseBody";
export declare class DeleteAccessKeyInRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAccessKeyInRecycleBinResponseBody;
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
