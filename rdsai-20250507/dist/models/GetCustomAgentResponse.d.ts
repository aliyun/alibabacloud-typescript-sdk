import * as $dara from '@darabonba/typescript';
import { GetCustomAgentResponseBody } from "./GetCustomAgentResponseBody";
export declare class GetCustomAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetCustomAgentResponseBody;
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
