import * as $dara from '@darabonba/typescript';
import { FindCustomAgentImagePreparationResponseBody } from "./FindCustomAgentImagePreparationResponseBody";
export declare class FindCustomAgentImagePreparationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: FindCustomAgentImagePreparationResponseBody;
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
