import * as $dara from '@darabonba/typescript';
import { RestartDBClusterResponseBody } from "./RestartDbclusterResponseBody";
export declare class RestartDBClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartDBClusterResponseBody;
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
