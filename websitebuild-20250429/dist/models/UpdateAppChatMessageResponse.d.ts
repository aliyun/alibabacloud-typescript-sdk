import * as $dara from '@darabonba/typescript';
import { UpdateAppChatMessageResponseBody } from "./UpdateAppChatMessageResponseBody";
export declare class UpdateAppChatMessageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppChatMessageResponseBody;
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
