import * as $dara from '@darabonba/typescript';
import { DeleteLakebaseS3AccountResponseBody } from "./DeleteLakebaseS3accountResponseBody";
export declare class DeleteLakebaseS3AccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteLakebaseS3AccountResponseBody;
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
