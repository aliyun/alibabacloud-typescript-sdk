import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterDeletionResponseBody } from "./ModifyDbclusterDeletionResponseBody";
export declare class ModifyDBClusterDeletionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterDeletionResponseBody;
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
