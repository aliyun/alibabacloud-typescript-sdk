import * as $dara from '@darabonba/typescript';
import { RebuildReplicationLinkResponseBody } from "./RebuildReplicationLinkResponseBody";
export declare class RebuildReplicationLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RebuildReplicationLinkResponseBody;
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
