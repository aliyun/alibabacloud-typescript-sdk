import * as $dara from '@darabonba/typescript';
import { CreateGlobalDataNetworkResponseBody } from "./CreateGlobalDataNetworkResponseBody";
export declare class CreateGlobalDataNetworkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGlobalDataNetworkResponseBody;
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
