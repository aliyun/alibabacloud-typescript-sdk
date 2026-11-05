import * as $dara from '@darabonba/typescript';
import { AddPolarClawMCPServerResponseBody } from "./AddPolarClawMcpserverResponseBody";
export declare class AddPolarClawMCPServerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddPolarClawMCPServerResponseBody;
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
