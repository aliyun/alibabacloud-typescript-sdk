import * as $dara from '@darabonba/typescript';
import { UpdateAgentIMChannelResponseBody } from "./UpdateAgentImchannelResponseBody";
export declare class UpdateAgentIMChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAgentIMChannelResponseBody;
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
