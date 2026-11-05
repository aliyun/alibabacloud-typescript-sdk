import * as $dara from '@darabonba/typescript';
import { GetExternalAgentBootstrapOptionsResponseBody } from "./GetExternalAgentBootstrapOptionsResponseBody";
export declare class GetExternalAgentBootstrapOptionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetExternalAgentBootstrapOptionsResponseBody;
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
