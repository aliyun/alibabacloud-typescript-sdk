import * as $dara from '@darabonba/typescript';
import { VerifyConnectorResponseBody } from "./VerifyConnectorResponseBody";
export declare class VerifyConnectorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyConnectorResponseBody;
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
