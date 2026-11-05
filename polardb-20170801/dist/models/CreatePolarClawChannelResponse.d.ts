import * as $dara from '@darabonba/typescript';
import { CreatePolarClawChannelResponseBody } from "./CreatePolarClawChannelResponseBody";
export declare class CreatePolarClawChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePolarClawChannelResponseBody;
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
