import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterDescriptionZonalResponseBody } from "./ModifyDbclusterDescriptionZonalResponseBody";
export declare class ModifyDBClusterDescriptionZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterDescriptionZonalResponseBody;
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
