import * as $dara from '@darabonba/typescript';
import { UpdateMiniAppBindingResponseBody } from "./UpdateMiniAppBindingResponseBody";
export declare class UpdateMiniAppBindingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateMiniAppBindingResponseBody;
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
