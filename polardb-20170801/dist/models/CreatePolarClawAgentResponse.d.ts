import * as $dara from '@darabonba/typescript';
import { CreatePolarClawAgentResponseBody } from "./CreatePolarClawAgentResponseBody";
export declare class CreatePolarClawAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePolarClawAgentResponseBody;
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
