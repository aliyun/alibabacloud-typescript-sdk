import * as $dara from '@darabonba/typescript';
import { ModifyInstanceConfigResponseBody } from "./ModifyInstanceConfigResponseBody";
export declare class ModifyInstanceConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceConfigResponseBody;
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
