import * as $dara from '@darabonba/typescript';
import { RollbackAppCodeSnapshotResponseBody } from "./RollbackAppCodeSnapshotResponseBody";
export declare class RollbackAppCodeSnapshotResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RollbackAppCodeSnapshotResponseBody;
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
