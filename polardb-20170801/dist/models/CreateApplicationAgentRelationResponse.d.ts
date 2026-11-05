import * as $dara from '@darabonba/typescript';
import { CreateApplicationAgentRelationResponseBody } from "./CreateApplicationAgentRelationResponseBody";
export declare class CreateApplicationAgentRelationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateApplicationAgentRelationResponseBody;
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
