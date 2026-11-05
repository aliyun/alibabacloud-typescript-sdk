import * as $dara from '@darabonba/typescript';
import { IntrospectAppInstanceTicketForPreviewResponseBody } from "./IntrospectAppInstanceTicketForPreviewResponseBody";
export declare class IntrospectAppInstanceTicketForPreviewResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: IntrospectAppInstanceTicketForPreviewResponseBody;
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
