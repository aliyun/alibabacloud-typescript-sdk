import * as $dara from '@darabonba/typescript';
import { ListAIStaffChatEventsResponseBody } from "./ListAistaffChatEventsResponseBody";
export declare class ListAIStaffChatEventsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAIStaffChatEventsResponseBody;
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
