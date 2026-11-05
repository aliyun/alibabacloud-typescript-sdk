import * as $dara from '@darabonba/typescript';
import { CreateManagedAgentResponseBody } from "./CreateManagedAgentResponseBody";
export declare class CreateManagedAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateManagedAgentResponseBody;
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
