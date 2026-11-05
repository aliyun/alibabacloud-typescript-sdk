import * as $dara from '@darabonba/typescript';
import { ListUserBackupFilesResponseBody } from "./ListUserBackupFilesResponseBody";
export declare class ListUserBackupFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListUserBackupFilesResponseBody;
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
