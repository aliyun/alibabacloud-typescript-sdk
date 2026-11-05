import * as $dara from '@darabonba/typescript';
import { GetConnectionTicketResponseBody } from "./GetConnectionTicketResponseBody";
export declare class GetConnectionTicketResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetConnectionTicketResponseBody;
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
