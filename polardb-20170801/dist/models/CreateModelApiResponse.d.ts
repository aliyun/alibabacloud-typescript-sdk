import * as $dara from '@darabonba/typescript';
import { CreateModelApiResponseBody } from "./CreateModelApiResponseBody";
export declare class CreateModelApiResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateModelApiResponseBody;
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
