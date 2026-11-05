import * as $dara from '@darabonba/typescript';
import { GetTeamResponseBody } from "./GetTeamResponseBody";
export declare class GetTeamResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetTeamResponseBody;
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
