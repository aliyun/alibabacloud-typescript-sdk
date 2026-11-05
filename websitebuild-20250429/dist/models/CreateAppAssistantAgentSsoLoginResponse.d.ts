import * as $dara from '@darabonba/typescript';
import { CreateAppAssistantAgentSsoLoginResponseBody } from "./CreateAppAssistantAgentSsoLoginResponseBody";
export declare class CreateAppAssistantAgentSsoLoginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppAssistantAgentSsoLoginResponseBody;
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
