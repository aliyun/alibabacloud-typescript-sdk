import * as $dara from '@darabonba/typescript';
import { StartRecordContentResponseBody } from "./StartRecordContentResponseBody";
export declare class StartRecordContentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartRecordContentResponseBody;
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
