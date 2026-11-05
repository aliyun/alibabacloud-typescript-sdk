import * as $dara from '@darabonba/typescript';
import { ApproveFotaUpdateResponseBody } from "./ApproveFotaUpdateResponseBody";
export declare class ApproveFotaUpdateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ApproveFotaUpdateResponseBody;
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
