import * as $dara from '@darabonba/typescript';
import { DeleteAppFileResponseBody } from "./DeleteAppFileResponseBody";
export declare class DeleteAppFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppFileResponseBody;
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
