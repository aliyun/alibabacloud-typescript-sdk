import * as $dara from '@darabonba/typescript';
import { ListMyAppPluginsResponseBody } from "./ListMyAppPluginsResponseBody";
export declare class ListMyAppPluginsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMyAppPluginsResponseBody;
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
