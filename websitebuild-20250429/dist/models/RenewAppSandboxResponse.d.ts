import * as $dara from '@darabonba/typescript';
import { RenewAppSandboxResponseBody } from "./RenewAppSandboxResponseBody";
export declare class RenewAppSandboxResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RenewAppSandboxResponseBody;
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
