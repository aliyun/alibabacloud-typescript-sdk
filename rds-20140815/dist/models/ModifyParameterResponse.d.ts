import * as $dara from '@darabonba/typescript';
import { ModifyParameterResponseBody } from "./ModifyParameterResponseBody";
export declare class ModifyParameterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyParameterResponseBody;
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
