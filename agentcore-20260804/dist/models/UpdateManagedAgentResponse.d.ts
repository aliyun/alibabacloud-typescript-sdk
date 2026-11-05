import * as $dara from '@darabonba/typescript';
import { UpdateManagedAgentResponseBody } from "./UpdateManagedAgentResponseBody";
export declare class UpdateManagedAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateManagedAgentResponseBody;
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
