import * as $dara from '@darabonba/typescript';
import { DeleteManagedAgentResponseBody } from "./DeleteManagedAgentResponseBody";
export declare class DeleteManagedAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteManagedAgentResponseBody;
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
