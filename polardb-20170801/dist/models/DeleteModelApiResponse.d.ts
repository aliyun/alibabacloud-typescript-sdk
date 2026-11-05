import * as $dara from '@darabonba/typescript';
import { DeleteModelApiResponseBody } from "./DeleteModelApiResponseBody";
export declare class DeleteModelApiResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteModelApiResponseBody;
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
