import * as $dara from '@darabonba/typescript';
import { UpdateModelConnectionResponseBody } from "./UpdateModelConnectionResponseBody";
export declare class UpdateModelConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateModelConnectionResponseBody;
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
