import * as $dara from '@darabonba/typescript';
import { ListCustomAgentResponseBody } from "./ListCustomAgentResponseBody";
export declare class ListCustomAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListCustomAgentResponseBody;
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
