import * as $dara from '@darabonba/typescript';
import { ListLakebaseS3AccountsResponseBody } from "./ListLakebaseS3accountsResponseBody";
export declare class ListLakebaseS3AccountsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListLakebaseS3AccountsResponseBody;
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
