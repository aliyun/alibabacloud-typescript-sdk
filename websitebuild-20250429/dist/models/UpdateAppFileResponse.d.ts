import * as $dara from '@darabonba/typescript';
import { UpdateAppFileResponseBody } from "./UpdateAppFileResponseBody";
export declare class UpdateAppFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppFileResponseBody;
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
