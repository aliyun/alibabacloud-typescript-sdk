import * as $dara from '@darabonba/typescript';
import { ModifyMaterialFileResponseBody } from "./ModifyMaterialFileResponseBody";
export declare class ModifyMaterialFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyMaterialFileResponseBody;
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
