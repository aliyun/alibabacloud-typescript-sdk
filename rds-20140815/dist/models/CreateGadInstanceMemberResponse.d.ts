import * as $dara from '@darabonba/typescript';
import { CreateGadInstanceMemberResponseBody } from "./CreateGadInstanceMemberResponseBody";
export declare class CreateGadInstanceMemberResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGadInstanceMemberResponseBody;
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
