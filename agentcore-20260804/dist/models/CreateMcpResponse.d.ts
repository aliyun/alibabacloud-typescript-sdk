import * as $dara from '@darabonba/typescript';
import { CreateMcpResponseBody } from "./CreateMcpResponseBody";
export declare class CreateMcpResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateMcpResponseBody;
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
