import * as $dara from '@darabonba/typescript';
import { UpdateAppCodeResponseBody } from "./UpdateAppCodeResponseBody";
export declare class UpdateAppCodeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppCodeResponseBody;
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
