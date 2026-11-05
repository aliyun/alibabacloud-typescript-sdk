import * as $dara from '@darabonba/typescript';
import { DeleteAgentIMChannelResponseBody } from "./DeleteAgentImchannelResponseBody";
export declare class DeleteAgentIMChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgentIMChannelResponseBody;
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
