import * as $dara from '@darabonba/typescript';
import { CreateAIStaffConversationResponseBody } from "./CreateAistaffConversationResponseBody";
export declare class CreateAIStaffConversationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAIStaffConversationResponseBody;
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
