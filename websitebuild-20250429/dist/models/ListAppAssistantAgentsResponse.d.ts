import * as $dara from '@darabonba/typescript';
import { ListAppAssistantAgentsResponseBody } from "./ListAppAssistantAgentsResponseBody";
export declare class ListAppAssistantAgentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppAssistantAgentsResponseBody;
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
