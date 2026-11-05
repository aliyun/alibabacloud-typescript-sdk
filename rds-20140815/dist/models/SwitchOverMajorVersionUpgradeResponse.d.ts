import * as $dara from '@darabonba/typescript';
import { SwitchOverMajorVersionUpgradeResponseBody } from "./SwitchOverMajorVersionUpgradeResponseBody";
export declare class SwitchOverMajorVersionUpgradeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchOverMajorVersionUpgradeResponseBody;
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
