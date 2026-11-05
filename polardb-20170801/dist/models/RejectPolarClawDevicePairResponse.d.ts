import * as $dara from '@darabonba/typescript';
import { RejectPolarClawDevicePairResponseBody } from "./RejectPolarClawDevicePairResponseBody";
export declare class RejectPolarClawDevicePairResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RejectPolarClawDevicePairResponseBody;
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
