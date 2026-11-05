import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseMemberResponseBody } from "./UpdateContextDatabaseMemberResponseBody";
export declare class UpdateContextDatabaseMemberResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseMemberResponseBody;
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
