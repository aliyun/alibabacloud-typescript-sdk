import * as $dara from '@darabonba/typescript';
import { RestartDBLinkResponseBody } from "./RestartDblinkResponseBody";
export declare class RestartDBLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartDBLinkResponseBody;
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
