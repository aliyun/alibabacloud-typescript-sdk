import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterPrimaryZoneResponseBody } from "./ModifyDbclusterPrimaryZoneResponseBody";
export declare class ModifyDBClusterPrimaryZoneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterPrimaryZoneResponseBody;
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
