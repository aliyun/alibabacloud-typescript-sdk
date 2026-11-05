import * as $dara from '@darabonba/typescript';
import { DeleteAppNotificationSceneResponseBody } from "./DeleteAppNotificationSceneResponseBody";
export declare class DeleteAppNotificationSceneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppNotificationSceneResponseBody;
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
