import * as $dara from '@darabonba/typescript';
import { CreateDdrInstanceResponseBody } from "./CreateDdrInstanceResponseBody";
export declare class CreateDdrInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDdrInstanceResponseBody;
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
