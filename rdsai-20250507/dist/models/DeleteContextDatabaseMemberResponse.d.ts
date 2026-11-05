import * as $dara from '@darabonba/typescript';
import { DeleteContextDatabaseMemberResponseBody } from "./DeleteContextDatabaseMemberResponseBody";
export declare class DeleteContextDatabaseMemberResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteContextDatabaseMemberResponseBody;
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
