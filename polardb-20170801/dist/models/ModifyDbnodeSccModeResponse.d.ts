import * as $dara from '@darabonba/typescript';
import { ModifyDBNodeSccModeResponseBody } from "./ModifyDbnodeSccModeResponseBody";
export declare class ModifyDBNodeSccModeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodeSccModeResponseBody;
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
