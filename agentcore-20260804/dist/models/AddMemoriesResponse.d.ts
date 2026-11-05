import * as $dara from '@darabonba/typescript';
import { AddMemoriesResponseBody } from "./AddMemoriesResponseBody";
export declare class AddMemoriesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddMemoriesResponseBody;
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
