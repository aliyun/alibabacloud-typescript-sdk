import * as $dara from '@darabonba/typescript';
import { ListRCVClustersResponseBody } from "./ListRcvclustersResponseBody";
export declare class ListRCVClustersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListRCVClustersResponseBody;
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
