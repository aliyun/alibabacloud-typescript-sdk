import * as $dara from '@darabonba/typescript';
import { TagResourcesResponseBody } from "./TagResourcesResponseBody";
export declare class TagResourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: TagResourcesResponseBody;
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
