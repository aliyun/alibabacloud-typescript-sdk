import * as $dara from '@darabonba/typescript';
import { ListMcpMarketItemsResponseBody } from "./ListMcpMarketItemsResponseBody";
export declare class ListMcpMarketItemsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMcpMarketItemsResponseBody;
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
