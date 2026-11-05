import * as $dara from '@darabonba/typescript';
import { ModifyResourcePackageResponseBody } from "./ModifyResourcePackageResponseBody";
export declare class ModifyResourcePackageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyResourcePackageResponseBody;
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
