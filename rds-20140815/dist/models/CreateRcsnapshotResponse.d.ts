import * as $dara from '@darabonba/typescript';
import { CreateRCSnapshotResponseBody } from "./CreateRcsnapshotResponseBody";
export declare class CreateRCSnapshotResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRCSnapshotResponseBody;
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
