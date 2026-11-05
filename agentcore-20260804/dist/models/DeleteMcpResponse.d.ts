import * as $dara from '@darabonba/typescript';
import { DeleteMcpResponseBody } from "./DeleteMcpResponseBody";
export declare class DeleteMcpResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteMcpResponseBody;
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
