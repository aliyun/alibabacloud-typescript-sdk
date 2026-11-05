import * as $dara from '@darabonba/typescript';
import { DisableConnectorResponseBody } from "./DisableConnectorResponseBody";
export declare class DisableConnectorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisableConnectorResponseBody;
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
