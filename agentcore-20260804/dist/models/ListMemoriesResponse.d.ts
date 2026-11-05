import * as $dara from '@darabonba/typescript';
import { ListMemoriesResponseBody } from "./ListMemoriesResponseBody";
export declare class ListMemoriesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMemoriesResponseBody;
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
