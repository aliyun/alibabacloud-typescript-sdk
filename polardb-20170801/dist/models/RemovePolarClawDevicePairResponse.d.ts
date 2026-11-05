import * as $dara from '@darabonba/typescript';
import { RemovePolarClawDevicePairResponseBody } from "./RemovePolarClawDevicePairResponseBody";
export declare class RemovePolarClawDevicePairResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemovePolarClawDevicePairResponseBody;
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
