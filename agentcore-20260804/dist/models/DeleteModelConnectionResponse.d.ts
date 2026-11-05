import * as $dara from '@darabonba/typescript';
import { DeleteModelConnectionResponseBody } from "./DeleteModelConnectionResponseBody";
export declare class DeleteModelConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteModelConnectionResponseBody;
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
