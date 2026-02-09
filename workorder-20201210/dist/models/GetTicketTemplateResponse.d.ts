import * as $dara from '@darabonba/typescript';
import { GetTicketTemplateResponseBody } from "./GetTicketTemplateResponseBody";
export declare class GetTicketTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetTicketTemplateResponseBody;
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
