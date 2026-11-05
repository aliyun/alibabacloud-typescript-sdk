import * as $dara from '@darabonba/typescript';
import { CreateInspirationResponseBody } from "./CreateInspirationResponseBody";
export declare class CreateInspirationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateInspirationResponseBody;
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
