import * as $dara from '@darabonba/typescript';
import { DeleteRCDeploymentSetResponseBody } from "./DeleteRcdeploymentSetResponseBody";
export declare class DeleteRCDeploymentSetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCDeploymentSetResponseBody;
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
