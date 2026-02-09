import * as $dara from '@darabonba/typescript';
import { SuggestCategoryResponseBody } from "./SuggestCategoryResponseBody";
export declare class SuggestCategoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SuggestCategoryResponseBody;
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
