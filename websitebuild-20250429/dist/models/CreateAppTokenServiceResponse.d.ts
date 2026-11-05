import * as $dara from '@darabonba/typescript';
import { CreateAppTokenServiceResponseBody } from "./CreateAppTokenServiceResponseBody";
export declare class CreateAppTokenServiceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppTokenServiceResponseBody;
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
