import * as $dara from '@darabonba/typescript';
import { ModifyInstanceAuthConfigResponseBody } from "./ModifyInstanceAuthConfigResponseBody";
export declare class ModifyInstanceAuthConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceAuthConfigResponseBody;
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
