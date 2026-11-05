import * as $dara from '@darabonba/typescript';
import { GetAppSeoStatusResponseBody } from "./GetAppSeoStatusResponseBody";
export declare class GetAppSeoStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSeoStatusResponseBody;
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
