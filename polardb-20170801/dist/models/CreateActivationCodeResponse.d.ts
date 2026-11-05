import * as $dara from '@darabonba/typescript';
import { CreateActivationCodeResponseBody } from "./CreateActivationCodeResponseBody";
export declare class CreateActivationCodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateActivationCodeResponseBody;
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
