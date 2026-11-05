import * as $dara from '@darabonba/typescript';
import { GetMcpResponseBody } from "./GetMcpResponseBody";
export declare class GetMcpResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMcpResponseBody;
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
