import * as $dara from '@darabonba/typescript';
import { CreatePolarFsObjectResponseBody } from "./CreatePolarFsObjectResponseBody";
export declare class CreatePolarFsObjectResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreatePolarFsObjectResponseBody;
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
