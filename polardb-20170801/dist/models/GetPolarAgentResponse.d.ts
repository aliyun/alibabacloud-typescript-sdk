import * as $dara from '@darabonba/typescript';
import { GetPolarAgentResponseBody } from "./GetPolarAgentResponseBody";
export declare class GetPolarAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    id?: string;
    event?: string;
    body?: GetPolarAgentResponseBody;
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
