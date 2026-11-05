import * as $dara from '@darabonba/typescript';
import { ModifyAccountPasswordZonalResponseBody } from "./ModifyAccountPasswordZonalResponseBody";
export declare class ModifyAccountPasswordZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountPasswordZonalResponseBody;
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
