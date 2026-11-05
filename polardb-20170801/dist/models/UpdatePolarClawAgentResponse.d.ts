import * as $dara from '@darabonba/typescript';
import { UpdatePolarClawAgentResponseBody } from "./UpdatePolarClawAgentResponseBody";
export declare class UpdatePolarClawAgentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePolarClawAgentResponseBody;
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
