import * as $dara from '@darabonba/typescript';
import { DeleteExtensionsResponseBody } from "./DeleteExtensionsResponseBody";
export declare class DeleteExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteExtensionsResponseBody;
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
