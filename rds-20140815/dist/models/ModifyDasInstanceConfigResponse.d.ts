import * as $dara from '@darabonba/typescript';
import { ModifyDasInstanceConfigResponseBody } from "./ModifyDasInstanceConfigResponseBody";
export declare class ModifyDasInstanceConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDasInstanceConfigResponseBody;
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
