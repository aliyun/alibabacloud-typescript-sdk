import * as $dara from '@darabonba/typescript';
import { RefreshAppInstanceTicketResponseBody } from "./RefreshAppInstanceTicketResponseBody";
export declare class RefreshAppInstanceTicketResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RefreshAppInstanceTicketResponseBody;
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
