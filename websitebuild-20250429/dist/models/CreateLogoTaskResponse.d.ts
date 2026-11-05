import * as $dara from '@darabonba/typescript';
import { CreateLogoTaskResponseBody } from "./CreateLogoTaskResponseBody";
export declare class CreateLogoTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateLogoTaskResponseBody;
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
