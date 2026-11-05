import * as $dara from '@darabonba/typescript';
import { DeleteApplicationResponseBody } from "./DeleteApplicationResponseBody";
export declare class DeleteApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteApplicationResponseBody;
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
