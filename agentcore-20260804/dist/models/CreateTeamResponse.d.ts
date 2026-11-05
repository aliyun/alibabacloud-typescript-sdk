import * as $dara from '@darabonba/typescript';
import { CreateTeamResponseBody } from "./CreateTeamResponseBody";
export declare class CreateTeamResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateTeamResponseBody;
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
