import * as $dara from '@darabonba/typescript';
import { SendTokenCodeResponseBody } from "./SendTokenCodeResponseBody";
export declare class SendTokenCodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SendTokenCodeResponseBody;
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
