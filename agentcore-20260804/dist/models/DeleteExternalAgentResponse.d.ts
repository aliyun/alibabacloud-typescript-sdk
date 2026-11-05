import * as $dara from '@darabonba/typescript';
import { DeleteExternalAgentResponseBody } from "./DeleteExternalAgentResponseBody";
export declare class DeleteExternalAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteExternalAgentResponseBody;
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
