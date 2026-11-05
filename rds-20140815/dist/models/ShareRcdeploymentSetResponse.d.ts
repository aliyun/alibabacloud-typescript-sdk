import * as $dara from '@darabonba/typescript';
import { ShareRCDeploymentSetResponseBody } from "./ShareRcdeploymentSetResponseBody";
export declare class ShareRCDeploymentSetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ShareRCDeploymentSetResponseBody;
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
