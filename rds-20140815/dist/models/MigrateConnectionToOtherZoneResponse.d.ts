import * as $dara from '@darabonba/typescript';
import { MigrateConnectionToOtherZoneResponseBody } from "./MigrateConnectionToOtherZoneResponseBody";
export declare class MigrateConnectionToOtherZoneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MigrateConnectionToOtherZoneResponseBody;
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
