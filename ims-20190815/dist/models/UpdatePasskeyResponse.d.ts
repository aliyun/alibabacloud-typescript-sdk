import * as $dara from '@darabonba/typescript';
import { UpdatePasskeyResponseBody } from "./UpdatePasskeyResponseBody";
export declare class UpdatePasskeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePasskeyResponseBody;
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
