import * as $dara from '@darabonba/typescript';
import { UpdateExternalAgentResponseBody } from "./UpdateExternalAgentResponseBody";
export declare class UpdateExternalAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateExternalAgentResponseBody;
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
