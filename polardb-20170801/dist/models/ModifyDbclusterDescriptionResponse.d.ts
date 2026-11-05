import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterDescriptionResponseBody } from "./ModifyDbclusterDescriptionResponseBody";
export declare class ModifyDBClusterDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterDescriptionResponseBody;
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
