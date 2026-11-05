import * as $dara from '@darabonba/typescript';
import { GetMiniAppBindingForAdminResponseBody } from "./GetMiniAppBindingForAdminResponseBody";
export declare class GetMiniAppBindingForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMiniAppBindingForAdminResponseBody;
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
