import * as $dara from '@darabonba/typescript';
import { ClonePolarFsBasicSnapshotResponseBody } from "./ClonePolarFsBasicSnapshotResponseBody";
export declare class ClonePolarFsBasicSnapshotResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ClonePolarFsBasicSnapshotResponseBody;
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
