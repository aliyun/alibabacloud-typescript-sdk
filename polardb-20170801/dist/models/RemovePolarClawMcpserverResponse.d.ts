import * as $dara from '@darabonba/typescript';
import { RemovePolarClawMCPServerResponseBody } from "./RemovePolarClawMcpserverResponseBody";
export declare class RemovePolarClawMCPServerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemovePolarClawMCPServerResponseBody;
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
