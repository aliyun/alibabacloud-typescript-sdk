import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterArchResponseBody } from "./ModifyDbclusterArchResponseBody";
export declare class ModifyDBClusterArchResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterArchResponseBody;
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
