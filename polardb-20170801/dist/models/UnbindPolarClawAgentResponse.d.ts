import * as $dara from '@darabonba/typescript';
import { UnbindPolarClawAgentResponseBody } from "./UnbindPolarClawAgentResponseBody";
export declare class UnbindPolarClawAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnbindPolarClawAgentResponseBody;
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
