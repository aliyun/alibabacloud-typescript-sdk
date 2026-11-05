import * as $dara from '@darabonba/typescript';
import { ListTagResourcesForRegionResponseBody } from "./ListTagResourcesForRegionResponseBody";
export declare class ListTagResourcesForRegionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListTagResourcesForRegionResponseBody;
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
