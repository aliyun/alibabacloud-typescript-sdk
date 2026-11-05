import * as $dara from '@darabonba/typescript';
import { RestartPolarClawGatewayResponseBody } from "./RestartPolarClawGatewayResponseBody";
export declare class RestartPolarClawGatewayResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartPolarClawGatewayResponseBody;
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
