import * as $dara from '@darabonba/typescript';
import { GetImageCacheResponseBody } from "./GetImageCacheResponseBody";
export declare class GetImageCacheResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetImageCacheResponseBody;
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
