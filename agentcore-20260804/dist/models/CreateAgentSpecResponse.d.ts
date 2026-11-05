import * as $dara from '@darabonba/typescript';
import { CreateAgentSpecResponseBody } from "./CreateAgentSpecResponseBody";
export declare class CreateAgentSpecResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAgentSpecResponseBody;
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
