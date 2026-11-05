import * as $dara from '@darabonba/typescript';
import { CreateGatewayResponseBody } from "./CreateGatewayResponseBody";
export declare class CreateGatewayResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGatewayResponseBody;
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
