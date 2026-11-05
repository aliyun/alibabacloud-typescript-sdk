import * as $dara from '@darabonba/typescript';
import { ChatMessagesTaskStopResponseBody } from "./ChatMessagesTaskStopResponseBody";
export declare class ChatMessagesTaskStopResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ChatMessagesTaskStopResponseBody;
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
