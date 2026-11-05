import * as $dara from '@darabonba/typescript';
import { ListPolarClawDevicePairsResponseBody } from "./ListPolarClawDevicePairsResponseBody";
export declare class ListPolarClawDevicePairsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListPolarClawDevicePairsResponseBody;
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
