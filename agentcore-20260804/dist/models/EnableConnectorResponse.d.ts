import * as $dara from '@darabonba/typescript';
import { EnableConnectorResponseBody } from "./EnableConnectorResponseBody";
export declare class EnableConnectorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableConnectorResponseBody;
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
