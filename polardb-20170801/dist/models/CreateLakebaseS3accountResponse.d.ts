import * as $dara from '@darabonba/typescript';
import { CreateLakebaseS3AccountResponseBody } from "./CreateLakebaseS3accountResponseBody";
export declare class CreateLakebaseS3AccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateLakebaseS3AccountResponseBody;
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
