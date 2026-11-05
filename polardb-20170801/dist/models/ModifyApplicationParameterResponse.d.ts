import * as $dara from '@darabonba/typescript';
import { ModifyApplicationParameterResponseBody } from "./ModifyApplicationParameterResponseBody";
export declare class ModifyApplicationParameterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyApplicationParameterResponseBody;
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
