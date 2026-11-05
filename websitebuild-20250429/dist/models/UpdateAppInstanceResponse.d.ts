import * as $dara from '@darabonba/typescript';
import { UpdateAppInstanceResponseBody } from "./UpdateAppInstanceResponseBody";
export declare class UpdateAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppInstanceResponseBody;
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
