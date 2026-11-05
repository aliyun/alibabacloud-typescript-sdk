import * as $dara from '@darabonba/typescript';
import { CreateReplicationLinkResponseBody } from "./CreateReplicationLinkResponseBody";
export declare class CreateReplicationLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateReplicationLinkResponseBody;
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
