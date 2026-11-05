import * as $dara from '@darabonba/typescript';
import { ModifyApplicationDescriptionResponseBody } from "./ModifyApplicationDescriptionResponseBody";
export declare class ModifyApplicationDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyApplicationDescriptionResponseBody;
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
