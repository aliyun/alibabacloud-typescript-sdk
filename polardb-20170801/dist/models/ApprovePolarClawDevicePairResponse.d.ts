import * as $dara from '@darabonba/typescript';
import { ApprovePolarClawDevicePairResponseBody } from "./ApprovePolarClawDevicePairResponseBody";
export declare class ApprovePolarClawDevicePairResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ApprovePolarClawDevicePairResponseBody;
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
