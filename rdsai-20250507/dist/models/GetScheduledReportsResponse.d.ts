import * as $dara from '@darabonba/typescript';
import { GetScheduledReportsResponseBody } from "./GetScheduledReportsResponseBody";
export declare class GetScheduledReportsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetScheduledReportsResponseBody;
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
