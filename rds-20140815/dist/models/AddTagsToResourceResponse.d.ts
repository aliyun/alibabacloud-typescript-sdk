import * as $dara from '@darabonba/typescript';
import { AddTagsToResourceResponseBody } from "./AddTagsToResourceResponseBody";
export declare class AddTagsToResourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddTagsToResourceResponseBody;
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
