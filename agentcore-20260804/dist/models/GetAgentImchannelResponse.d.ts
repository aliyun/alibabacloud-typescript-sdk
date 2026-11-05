import * as $dara from '@darabonba/typescript';
import { GetAgentIMChannelResponseBody } from "./GetAgentImchannelResponseBody";
export declare class GetAgentIMChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentIMChannelResponseBody;
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
