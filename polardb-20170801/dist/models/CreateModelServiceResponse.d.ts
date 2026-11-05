import * as $dara from '@darabonba/typescript';
import { CreateModelServiceResponseBody } from "./CreateModelServiceResponseBody";
export declare class CreateModelServiceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateModelServiceResponseBody;
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
