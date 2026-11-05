import * as $dara from '@darabonba/typescript';
import { GetMiniAppBindingResponseBody } from "./GetMiniAppBindingResponseBody";
export declare class GetMiniAppBindingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMiniAppBindingResponseBody;
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
