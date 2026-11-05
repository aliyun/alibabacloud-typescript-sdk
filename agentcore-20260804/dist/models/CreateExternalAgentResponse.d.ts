import * as $dara from '@darabonba/typescript';
import { CreateExternalAgentResponseBody } from "./CreateExternalAgentResponseBody";
export declare class CreateExternalAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateExternalAgentResponseBody;
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
