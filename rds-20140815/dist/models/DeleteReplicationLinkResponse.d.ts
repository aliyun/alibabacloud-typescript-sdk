import * as $dara from '@darabonba/typescript';
import { DeleteReplicationLinkResponseBody } from "./DeleteReplicationLinkResponseBody";
export declare class DeleteReplicationLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteReplicationLinkResponseBody;
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
