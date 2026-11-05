import * as $dara from '@darabonba/typescript';
import { ModifyDBProxyResponseBody } from "./ModifyDbproxyResponseBody";
export declare class ModifyDBProxyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBProxyResponseBody;
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
