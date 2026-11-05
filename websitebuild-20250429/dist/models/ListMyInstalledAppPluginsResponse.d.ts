import * as $dara from '@darabonba/typescript';
import { ListMyInstalledAppPluginsResponseBody } from "./ListMyInstalledAppPluginsResponseBody";
export declare class ListMyInstalledAppPluginsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMyInstalledAppPluginsResponseBody;
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
