import * as $dara from '@darabonba/typescript';
import { CreateAppAssistantAgentResponseBody } from "./CreateAppAssistantAgentResponseBody";
export declare class CreateAppAssistantAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppAssistantAgentResponseBody;
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
