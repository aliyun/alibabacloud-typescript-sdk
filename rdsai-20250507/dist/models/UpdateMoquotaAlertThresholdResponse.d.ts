import * as $dara from '@darabonba/typescript';
import { UpdateMOQuotaAlertThresholdResponseBody } from "./UpdateMoquotaAlertThresholdResponseBody";
export declare class UpdateMOQuotaAlertThresholdResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateMOQuotaAlertThresholdResponseBody;
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
