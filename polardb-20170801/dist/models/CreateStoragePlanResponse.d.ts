import * as $dara from '@darabonba/typescript';
import { CreateStoragePlanResponseBody } from "./CreateStoragePlanResponseBody";
export declare class CreateStoragePlanResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateStoragePlanResponseBody;
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
