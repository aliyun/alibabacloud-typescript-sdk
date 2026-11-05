import * as $dara from '@darabonba/typescript';
import { GetManagedAgentResponseBody } from "./GetManagedAgentResponseBody";
export declare class GetManagedAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetManagedAgentResponseBody;
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
