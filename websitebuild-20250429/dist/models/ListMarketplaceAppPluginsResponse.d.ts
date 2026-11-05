import * as $dara from '@darabonba/typescript';
import { ListMarketplaceAppPluginsResponseBody } from "./ListMarketplaceAppPluginsResponseBody";
export declare class ListMarketplaceAppPluginsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMarketplaceAppPluginsResponseBody;
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
