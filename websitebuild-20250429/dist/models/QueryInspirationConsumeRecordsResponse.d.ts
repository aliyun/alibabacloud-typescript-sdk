import * as $dara from '@darabonba/typescript';
import { QueryInspirationConsumeRecordsResponseBody } from "./QueryInspirationConsumeRecordsResponseBody";
export declare class QueryInspirationConsumeRecordsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryInspirationConsumeRecordsResponseBody;
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
