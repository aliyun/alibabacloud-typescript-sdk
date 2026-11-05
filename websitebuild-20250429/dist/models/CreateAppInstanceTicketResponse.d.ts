import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceTicketResponseBody } from "./CreateAppInstanceTicketResponseBody";
export declare class CreateAppInstanceTicketResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppInstanceTicketResponseBody;
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
