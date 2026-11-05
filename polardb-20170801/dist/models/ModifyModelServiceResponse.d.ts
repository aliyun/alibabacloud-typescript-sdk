import * as $dara from '@darabonba/typescript';
import { ModifyModelServiceResponseBody } from "./ModifyModelServiceResponseBody";
export declare class ModifyModelServiceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyModelServiceResponseBody;
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
