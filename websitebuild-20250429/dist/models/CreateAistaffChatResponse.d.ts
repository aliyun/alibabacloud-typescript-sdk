import * as $dara from '@darabonba/typescript';
import { CreateAIStaffChatResponseBody } from "./CreateAistaffChatResponseBody";
export declare class CreateAIStaffChatResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAIStaffChatResponseBody;
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
