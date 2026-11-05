import * as $dara from '@darabonba/typescript';
import { ConfirmNotifyResponseBody } from "./ConfirmNotifyResponseBody";
export declare class ConfirmNotifyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ConfirmNotifyResponseBody;
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
