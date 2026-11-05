import * as $dara from '@darabonba/typescript';
import { NotifyAppNotificationForAdminResponseBody } from "./NotifyAppNotificationForAdminResponseBody";
export declare class NotifyAppNotificationForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: NotifyAppNotificationForAdminResponseBody;
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
