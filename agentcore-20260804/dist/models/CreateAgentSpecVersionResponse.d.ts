import * as $dara from '@darabonba/typescript';
import { CreateAgentSpecVersionResponseBody } from "./CreateAgentSpecVersionResponseBody";
export declare class CreateAgentSpecVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAgentSpecVersionResponseBody;
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
