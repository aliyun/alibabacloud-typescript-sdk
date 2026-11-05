import * as $dara from '@darabonba/typescript';
import { BindPolarClawAgentResponseBody } from "./BindPolarClawAgentResponseBody";
export declare class BindPolarClawAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BindPolarClawAgentResponseBody;
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
