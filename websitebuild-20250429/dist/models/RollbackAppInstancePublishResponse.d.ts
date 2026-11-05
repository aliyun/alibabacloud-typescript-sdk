import * as $dara from '@darabonba/typescript';
import { RollbackAppInstancePublishResponseBody } from "./RollbackAppInstancePublishResponseBody";
export declare class RollbackAppInstancePublishResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RollbackAppInstancePublishResponseBody;
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
