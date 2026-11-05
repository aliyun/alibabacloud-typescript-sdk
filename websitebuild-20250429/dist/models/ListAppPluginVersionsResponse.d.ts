import * as $dara from '@darabonba/typescript';
import { ListAppPluginVersionsResponseBody } from "./ListAppPluginVersionsResponseBody";
export declare class ListAppPluginVersionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppPluginVersionsResponseBody;
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
