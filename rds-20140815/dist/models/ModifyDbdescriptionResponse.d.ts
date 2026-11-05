import * as $dara from '@darabonba/typescript';
import { ModifyDBDescriptionResponseBody } from "./ModifyDbdescriptionResponseBody";
export declare class ModifyDBDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBDescriptionResponseBody;
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
