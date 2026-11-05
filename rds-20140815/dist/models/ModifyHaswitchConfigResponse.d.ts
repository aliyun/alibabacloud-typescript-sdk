import * as $dara from '@darabonba/typescript';
import { ModifyHASwitchConfigResponseBody } from "./ModifyHaswitchConfigResponseBody";
export declare class ModifyHASwitchConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyHASwitchConfigResponseBody;
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
