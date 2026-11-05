import * as $dara from '@darabonba/typescript';
import { UpdateAgentIMChannelCredentialResponseBody } from "./UpdateAgentImchannelCredentialResponseBody";
export declare class UpdateAgentIMChannelCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAgentIMChannelCredentialResponseBody;
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
