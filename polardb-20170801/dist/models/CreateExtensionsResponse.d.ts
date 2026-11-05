import * as $dara from '@darabonba/typescript';
import { CreateExtensionsResponseBody } from "./CreateExtensionsResponseBody";
export declare class CreateExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateExtensionsResponseBody;
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
