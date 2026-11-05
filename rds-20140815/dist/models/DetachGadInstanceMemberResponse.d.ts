import * as $dara from '@darabonba/typescript';
import { DetachGadInstanceMemberResponseBody } from "./DetachGadInstanceMemberResponseBody";
export declare class DetachGadInstanceMemberResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DetachGadInstanceMemberResponseBody;
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
