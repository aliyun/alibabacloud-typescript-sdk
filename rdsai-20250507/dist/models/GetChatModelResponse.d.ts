import * as $dara from '@darabonba/typescript';
import { GetChatModelResponseBody } from "./GetChatModelResponseBody";
export declare class GetChatModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetChatModelResponseBody;
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
