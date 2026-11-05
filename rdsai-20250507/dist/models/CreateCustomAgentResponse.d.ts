import * as $dara from '@darabonba/typescript';
import { CreateCustomAgentResponseBody } from "./CreateCustomAgentResponseBody";
export declare class CreateCustomAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateCustomAgentResponseBody;
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
