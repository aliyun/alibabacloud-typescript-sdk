import * as $dara from '@darabonba/typescript';
import { ListAppPluginConfigsResponseBody } from "./ListAppPluginConfigsResponseBody";
export declare class ListAppPluginConfigsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppPluginConfigsResponseBody;
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
