import * as $dara from '@darabonba/typescript';
import { ModifySQLCollectorRetentionResponseBody } from "./ModifySqlcollectorRetentionResponseBody";
export declare class ModifySQLCollectorRetentionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifySQLCollectorRetentionResponseBody;
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
