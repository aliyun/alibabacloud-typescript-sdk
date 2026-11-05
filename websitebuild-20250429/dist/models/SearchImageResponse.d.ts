import * as $dara from '@darabonba/typescript';
import { SearchImageResponseBody } from "./SearchImageResponseBody";
export declare class SearchImageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SearchImageResponseBody;
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
