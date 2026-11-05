import * as $dara from '@darabonba/typescript';
import { ModifyPGHbaConfigResponseBody } from "./ModifyPghbaConfigResponseBody";
export declare class ModifyPGHbaConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyPGHbaConfigResponseBody;
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
