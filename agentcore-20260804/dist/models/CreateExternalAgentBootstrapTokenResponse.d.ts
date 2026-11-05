import * as $dara from '@darabonba/typescript';
import { CreateExternalAgentBootstrapTokenResponseBody } from "./CreateExternalAgentBootstrapTokenResponseBody";
export declare class CreateExternalAgentBootstrapTokenResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateExternalAgentBootstrapTokenResponseBody;
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
