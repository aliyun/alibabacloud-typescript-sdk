import * as $dara from '@darabonba/typescript';
import { ModifyAccountDescriptionResponseBody } from "./ModifyAccountDescriptionResponseBody";
export declare class ModifyAccountDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountDescriptionResponseBody;
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
