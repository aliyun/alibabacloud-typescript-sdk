import * as $dara from '@darabonba/typescript';
import { DeleteAgentSpecVersionResponseBody } from "./DeleteAgentSpecVersionResponseBody";
export declare class DeleteAgentSpecVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgentSpecVersionResponseBody;
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
