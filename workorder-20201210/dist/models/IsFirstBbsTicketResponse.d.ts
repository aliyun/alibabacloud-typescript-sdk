import * as $dara from '@darabonba/typescript';
import { IsFirstBbsTicketResponseBody } from "./IsFirstBbsTicketResponseBody";
export declare class IsFirstBbsTicketResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: IsFirstBbsTicketResponseBody;
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
