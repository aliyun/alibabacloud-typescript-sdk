import * as $dara from '@darabonba/typescript';
import { InstallMcpMarketItemResponseBody } from "./InstallMcpMarketItemResponseBody";
export declare class InstallMcpMarketItemResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: InstallMcpMarketItemResponseBody;
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
