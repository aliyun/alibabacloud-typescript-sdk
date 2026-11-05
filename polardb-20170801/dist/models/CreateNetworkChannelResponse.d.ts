import * as $dara from '@darabonba/typescript';
import { CreateNetworkChannelResponseBody } from "./CreateNetworkChannelResponseBody";
export declare class CreateNetworkChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateNetworkChannelResponseBody;
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
