import * as $dara from '@darabonba/typescript';
import { ModifyCustinsResourceResponseBody } from "./ModifyCustinsResourceResponseBody";
export declare class ModifyCustinsResourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyCustinsResourceResponseBody;
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
