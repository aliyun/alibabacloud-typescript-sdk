import * as $dara from '@darabonba/typescript';
import { ListImageCachesResponseBody } from "./ListImageCachesResponseBody";
export declare class ListImageCachesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListImageCachesResponseBody;
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
