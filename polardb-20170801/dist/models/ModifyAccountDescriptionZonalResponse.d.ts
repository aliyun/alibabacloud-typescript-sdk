import * as $dara from '@darabonba/typescript';
import { ModifyAccountDescriptionZonalResponseBody } from "./ModifyAccountDescriptionZonalResponseBody";
export declare class ModifyAccountDescriptionZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountDescriptionZonalResponseBody;
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
