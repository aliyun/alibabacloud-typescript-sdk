import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBody } from "./ListTagResourcesResponseBody";
export declare class ListTagResourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListTagResourcesResponseBody;
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
