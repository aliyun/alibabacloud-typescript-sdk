import * as $dara from '@darabonba/typescript';
import { OperateApplicationResponseBody } from "./OperateApplicationResponseBody";
export declare class OperateApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OperateApplicationResponseBody;
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
