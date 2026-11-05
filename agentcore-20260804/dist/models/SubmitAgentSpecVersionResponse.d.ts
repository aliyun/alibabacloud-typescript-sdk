import * as $dara from '@darabonba/typescript';
import { SubmitAgentSpecVersionResponseBody } from "./SubmitAgentSpecVersionResponseBody";
export declare class SubmitAgentSpecVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SubmitAgentSpecVersionResponseBody;
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
