import * as $dara from '@darabonba/typescript';
import { DeleteModelServiceResponseBody } from "./DeleteModelServiceResponseBody";
export declare class DeleteModelServiceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteModelServiceResponseBody;
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
