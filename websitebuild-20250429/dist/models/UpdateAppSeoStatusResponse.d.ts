import * as $dara from '@darabonba/typescript';
import { UpdateAppSeoStatusResponseBody } from "./UpdateAppSeoStatusResponseBody";
export declare class UpdateAppSeoStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppSeoStatusResponseBody;
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
