import * as $dara from '@darabonba/typescript';
import { ModifyInstancePropertiesResponseBody } from "./ModifyInstancePropertiesResponseBody";
export declare class ModifyInstancePropertiesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstancePropertiesResponseBody;
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
