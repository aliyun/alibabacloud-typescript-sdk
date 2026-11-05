import * as $dara from '@darabonba/typescript';
import { SwitchAppConversationResponseBody } from "./SwitchAppConversationResponseBody";
export declare class SwitchAppConversationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchAppConversationResponseBody;
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
