import * as $dara from '@darabonba/typescript';
import { CreateGADInstanceResponseBody } from "./CreateGadinstanceResponseBody";
export declare class CreateGADInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGADInstanceResponseBody;
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
