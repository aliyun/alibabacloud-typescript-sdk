import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterStorageSpaceResponseBody } from "./ModifyDbclusterStorageSpaceResponseBody";
export declare class ModifyDBClusterStorageSpaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterStorageSpaceResponseBody;
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
