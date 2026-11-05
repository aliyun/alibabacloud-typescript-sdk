import * as $dara from '@darabonba/typescript';
import { CreateAccountZonalResponseBody } from "./CreateAccountZonalResponseBody";
export declare class CreateAccountZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAccountZonalResponseBody;
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
