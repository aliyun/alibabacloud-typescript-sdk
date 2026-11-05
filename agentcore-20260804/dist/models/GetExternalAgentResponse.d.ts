import * as $dara from '@darabonba/typescript';
import { GetExternalAgentResponseBody } from "./GetExternalAgentResponseBody";
export declare class GetExternalAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetExternalAgentResponseBody;
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
