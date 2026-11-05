import * as $dara from '@darabonba/typescript';
import { OfflineAppInstanceResponseBody } from "./OfflineAppInstanceResponseBody";
export declare class OfflineAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OfflineAppInstanceResponseBody;
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
