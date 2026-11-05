import * as $dara from '@darabonba/typescript';
import { DisablePolarClawChannelResponseBody } from "./DisablePolarClawChannelResponseBody";
export declare class DisablePolarClawChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisablePolarClawChannelResponseBody;
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
