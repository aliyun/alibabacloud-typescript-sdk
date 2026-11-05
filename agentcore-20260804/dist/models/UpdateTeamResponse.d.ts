import * as $dara from '@darabonba/typescript';
import { UpdateTeamResponseBody } from "./UpdateTeamResponseBody";
export declare class UpdateTeamResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateTeamResponseBody;
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
