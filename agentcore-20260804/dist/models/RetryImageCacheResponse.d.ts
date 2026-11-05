import * as $dara from '@darabonba/typescript';
import { RetryImageCacheResponseBody } from "./RetryImageCacheResponseBody";
export declare class RetryImageCacheResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RetryImageCacheResponseBody;
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
