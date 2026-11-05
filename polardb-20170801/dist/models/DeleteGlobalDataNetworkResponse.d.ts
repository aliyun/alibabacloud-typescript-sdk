import * as $dara from '@darabonba/typescript';
import { DeleteGlobalDataNetworkResponseBody } from "./DeleteGlobalDataNetworkResponseBody";
export declare class DeleteGlobalDataNetworkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteGlobalDataNetworkResponseBody;
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
