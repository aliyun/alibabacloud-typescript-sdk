import * as $dara from '@darabonba/typescript';
import { DeleteNetworkChannelResponseBody } from "./DeleteNetworkChannelResponseBody";
export declare class DeleteNetworkChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteNetworkChannelResponseBody;
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
