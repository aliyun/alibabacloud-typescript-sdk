import * as $dara from '@darabonba/typescript';
import { SearchMemoriesResponseBody } from "./SearchMemoriesResponseBody";
export declare class SearchMemoriesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SearchMemoriesResponseBody;
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
