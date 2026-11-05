import * as $dara from '@darabonba/typescript';
import { CreatePostgresExtensionsResponseBody } from "./CreatePostgresExtensionsResponseBody";
export declare class CreatePostgresExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePostgresExtensionsResponseBody;
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
