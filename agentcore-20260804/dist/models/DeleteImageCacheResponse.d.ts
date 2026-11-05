import * as $dara from '@darabonba/typescript';
import { DeleteImageCacheResponseBody } from "./DeleteImageCacheResponseBody";
export declare class DeleteImageCacheResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteImageCacheResponseBody;
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
