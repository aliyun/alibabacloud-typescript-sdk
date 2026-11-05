import * as $dara from '@darabonba/typescript';
import { GetAgentSpecVersionResponseBody } from "./GetAgentSpecVersionResponseBody";
export declare class GetAgentSpecVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAgentSpecVersionResponseBody;
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
