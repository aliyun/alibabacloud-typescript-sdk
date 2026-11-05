import * as $dara from '@darabonba/typescript';
import { SwitchReplicationLinkResponseBody } from "./SwitchReplicationLinkResponseBody";
export declare class SwitchReplicationLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchReplicationLinkResponseBody;
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
