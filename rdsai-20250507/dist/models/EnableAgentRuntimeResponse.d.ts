import * as $dara from '@darabonba/typescript';
import { EnableAgentRuntimeResponseBody } from "./EnableAgentRuntimeResponseBody";
export declare class EnableAgentRuntimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableAgentRuntimeResponseBody;
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
