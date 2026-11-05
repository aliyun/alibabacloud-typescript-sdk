import * as $dara from '@darabonba/typescript';
import { DeletePolarClawChannelResponseBody } from "./DeletePolarClawChannelResponseBody";
export declare class DeletePolarClawChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarClawChannelResponseBody;
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
