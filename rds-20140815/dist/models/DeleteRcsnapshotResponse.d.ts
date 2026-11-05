import * as $dara from '@darabonba/typescript';
import { DeleteRCSnapshotResponseBody } from "./DeleteRcsnapshotResponseBody";
export declare class DeleteRCSnapshotResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCSnapshotResponseBody;
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
