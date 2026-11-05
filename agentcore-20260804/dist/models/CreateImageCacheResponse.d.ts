import * as $dara from '@darabonba/typescript';
import { CreateImageCacheResponseBody } from "./CreateImageCacheResponseBody";
export declare class CreateImageCacheResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateImageCacheResponseBody;
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
