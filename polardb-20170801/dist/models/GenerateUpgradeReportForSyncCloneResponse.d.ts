import * as $dara from '@darabonba/typescript';
import { GenerateUpgradeReportForSyncCloneResponseBody } from "./GenerateUpgradeReportForSyncCloneResponseBody";
export declare class GenerateUpgradeReportForSyncCloneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GenerateUpgradeReportForSyncCloneResponseBody;
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
