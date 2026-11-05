import * as $dara from '@darabonba/typescript';
import { UpdateApplicationResponseBody } from "./UpdateApplicationResponseBody";
export declare class UpdateApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateApplicationResponseBody;
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
