import * as $dara from '@darabonba/typescript';
import { ListAppPluginsResponseBody } from "./ListAppPluginsResponseBody";
export declare class ListAppPluginsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppPluginsResponseBody;
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
