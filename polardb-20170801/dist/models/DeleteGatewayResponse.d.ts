import * as $dara from '@darabonba/typescript';
import { DeleteGatewayResponseBody } from "./DeleteGatewayResponseBody";
export declare class DeleteGatewayResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteGatewayResponseBody;
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
