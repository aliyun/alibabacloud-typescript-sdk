import * as $dara from '@darabonba/typescript';
import { UpdateCustomAgentResponseBody } from "./UpdateCustomAgentResponseBody";
export declare class UpdateCustomAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateCustomAgentResponseBody;
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
