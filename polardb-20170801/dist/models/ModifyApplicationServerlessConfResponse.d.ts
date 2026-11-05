import * as $dara from '@darabonba/typescript';
import { ModifyApplicationServerlessConfResponseBody } from "./ModifyApplicationServerlessConfResponseBody";
export declare class ModifyApplicationServerlessConfResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyApplicationServerlessConfResponseBody;
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
