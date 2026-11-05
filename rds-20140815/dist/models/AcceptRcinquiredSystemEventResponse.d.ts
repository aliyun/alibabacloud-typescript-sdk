import * as $dara from '@darabonba/typescript';
import { AcceptRCInquiredSystemEventResponseBody } from "./AcceptRcinquiredSystemEventResponseBody";
export declare class AcceptRCInquiredSystemEventResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AcceptRCInquiredSystemEventResponseBody;
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
