import * as $dara from '@darabonba/typescript';
import { UpdateConnectorResponseBody } from "./UpdateConnectorResponseBody";
export declare class UpdateConnectorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateConnectorResponseBody;
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
