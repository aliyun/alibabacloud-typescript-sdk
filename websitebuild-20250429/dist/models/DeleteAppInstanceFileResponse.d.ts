import * as $dara from '@darabonba/typescript';
import { DeleteAppInstanceFileResponseBody } from "./DeleteAppInstanceFileResponseBody";
export declare class DeleteAppInstanceFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppInstanceFileResponseBody;
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
