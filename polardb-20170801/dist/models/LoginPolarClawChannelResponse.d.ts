import * as $dara from '@darabonba/typescript';
import { LoginPolarClawChannelResponseBody } from "./LoginPolarClawChannelResponseBody";
export declare class LoginPolarClawChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: LoginPolarClawChannelResponseBody;
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
