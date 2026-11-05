import * as $dara from '@darabonba/typescript';
import { OperateAppInstanceForPartnerResponseBody } from "./OperateAppInstanceForPartnerResponseBody";
export declare class OperateAppInstanceForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OperateAppInstanceForPartnerResponseBody;
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
