import * as $dara from '@darabonba/typescript';
import { MigrateToOtherZoneResponseBody } from "./MigrateToOtherZoneResponseBody";
export declare class MigrateToOtherZoneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MigrateToOtherZoneResponseBody;
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
