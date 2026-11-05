import * as $dara from '@darabonba/typescript';
import { GetAgentSpecLatestResponseBody } from "./GetAgentSpecLatestResponseBody";
export declare class GetAgentSpecLatestResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentSpecLatestResponseBody;
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
