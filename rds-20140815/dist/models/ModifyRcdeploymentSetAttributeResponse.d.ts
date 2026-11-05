import * as $dara from '@darabonba/typescript';
import { ModifyRCDeploymentSetAttributeResponseBody } from "./ModifyRcdeploymentSetAttributeResponseBody";
export declare class ModifyRCDeploymentSetAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCDeploymentSetAttributeResponseBody;
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
