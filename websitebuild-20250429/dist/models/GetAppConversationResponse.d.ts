import * as $dara from '@darabonba/typescript';
import { GetAppConversationResponseBody } from "./GetAppConversationResponseBody";
export declare class GetAppConversationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppConversationResponseBody;
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
