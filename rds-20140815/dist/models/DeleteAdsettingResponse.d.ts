import * as $dara from '@darabonba/typescript';
import { DeleteADSettingResponseBody } from "./DeleteAdsettingResponseBody";
export declare class DeleteADSettingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteADSettingResponseBody;
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
