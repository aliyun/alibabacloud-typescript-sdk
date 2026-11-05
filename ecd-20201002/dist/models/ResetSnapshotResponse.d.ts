import * as $dara from '@darabonba/typescript';
import { ResetSnapshotResponseBody } from "./ResetSnapshotResponseBody";
export declare class ResetSnapshotResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetSnapshotResponseBody;
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
