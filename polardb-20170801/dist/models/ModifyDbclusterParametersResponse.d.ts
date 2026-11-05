import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterParametersResponseBody } from "./ModifyDbclusterParametersResponseBody";
export declare class ModifyDBClusterParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterParametersResponseBody;
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
