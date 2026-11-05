import * as $dara from '@darabonba/typescript';
import { UpdateExtensionsResponseBody } from "./UpdateExtensionsResponseBody";
export declare class UpdateExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateExtensionsResponseBody;
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
