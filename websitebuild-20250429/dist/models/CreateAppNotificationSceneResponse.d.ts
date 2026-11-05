import * as $dara from '@darabonba/typescript';
import { CreateAppNotificationSceneResponseBody } from "./CreateAppNotificationSceneResponseBody";
export declare class CreateAppNotificationSceneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppNotificationSceneResponseBody;
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
