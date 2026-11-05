import * as $dara from '@darabonba/typescript';
import { UpdatePolarClawAgentToolsResponseBody } from "./UpdatePolarClawAgentToolsResponseBody";
export declare class UpdatePolarClawAgentToolsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePolarClawAgentToolsResponseBody;
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
