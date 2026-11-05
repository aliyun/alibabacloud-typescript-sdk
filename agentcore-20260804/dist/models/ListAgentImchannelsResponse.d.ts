import * as $dara from '@darabonba/typescript';
import { ListAgentIMChannelsResponseBody } from "./ListAgentImchannelsResponseBody";
export declare class ListAgentIMChannelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAgentIMChannelsResponseBody;
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
