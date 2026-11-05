import * as $dara from '@darabonba/typescript';
import { CreateAgentIMChannelResponseBody } from "./CreateAgentImchannelResponseBody";
export declare class CreateAgentIMChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAgentIMChannelResponseBody;
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
