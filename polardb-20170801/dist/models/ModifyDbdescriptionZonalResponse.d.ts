import * as $dara from '@darabonba/typescript';
import { ModifyDBDescriptionZonalResponseBody } from "./ModifyDbdescriptionZonalResponseBody";
export declare class ModifyDBDescriptionZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBDescriptionZonalResponseBody;
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
