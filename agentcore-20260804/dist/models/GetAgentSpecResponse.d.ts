import * as $dara from '@darabonba/typescript';
import { GetAgentSpecResponseBody } from "./GetAgentSpecResponseBody";
export declare class GetAgentSpecResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentSpecResponseBody;
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
