import * as $dara from '@darabonba/typescript';
import { UntagResourcesResponseBody } from "./UntagResourcesResponseBody";
export declare class UntagResourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UntagResourcesResponseBody;
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
