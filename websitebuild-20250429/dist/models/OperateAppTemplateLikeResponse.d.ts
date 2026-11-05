import * as $dara from '@darabonba/typescript';
import { OperateAppTemplateLikeResponseBody } from "./OperateAppTemplateLikeResponseBody";
export declare class OperateAppTemplateLikeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OperateAppTemplateLikeResponseBody;
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
