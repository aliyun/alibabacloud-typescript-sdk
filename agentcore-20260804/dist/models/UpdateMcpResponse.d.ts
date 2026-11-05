import * as $dara from '@darabonba/typescript';
import { UpdateMcpResponseBody } from "./UpdateMcpResponseBody";
export declare class UpdateMcpResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateMcpResponseBody;
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
