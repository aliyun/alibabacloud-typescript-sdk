import * as $dara from '@darabonba/typescript';
import { StopRecordContentResponseBody } from "./StopRecordContentResponseBody";
export declare class StopRecordContentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StopRecordContentResponseBody;
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
