import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterServerlessConfResponseBody } from "./ModifyDbclusterServerlessConfResponseBody";
export declare class ModifyDBClusterServerlessConfResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterServerlessConfResponseBody;
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
