import * as $dara from '@darabonba/typescript';
import { OperateAppServiceForPartnerResponseBody } from "./OperateAppServiceForPartnerResponseBody";
export declare class OperateAppServiceForPartnerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OperateAppServiceForPartnerResponseBody;
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
