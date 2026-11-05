import * as $dara from '@darabonba/typescript';
import { CreateContextDatabaseMemberResponseBody } from "./CreateContextDatabaseMemberResponseBody";
export declare class CreateContextDatabaseMemberResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateContextDatabaseMemberResponseBody;
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
