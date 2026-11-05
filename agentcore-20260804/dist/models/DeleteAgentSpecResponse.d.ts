import * as $dara from '@darabonba/typescript';
import { DeleteAgentSpecResponseBody } from "./DeleteAgentSpecResponseBody";
export declare class DeleteAgentSpecResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgentSpecResponseBody;
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
