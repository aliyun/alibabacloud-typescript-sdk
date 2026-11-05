import * as $dara from '@darabonba/typescript';
import { ModifyCollationTimeZoneResponseBody } from "./ModifyCollationTimeZoneResponseBody";
export declare class ModifyCollationTimeZoneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyCollationTimeZoneResponseBody;
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
