import * as $dara from '@darabonba/typescript';
import { RemoveTagsFromResourceResponseBody } from "./RemoveTagsFromResourceResponseBody";
export declare class RemoveTagsFromResourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveTagsFromResourceResponseBody;
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
