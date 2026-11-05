import * as $dara from '@darabonba/typescript';
import { CreateRCDeploymentSetResponseBody } from "./CreateRcdeploymentSetResponseBody";
export declare class CreateRCDeploymentSetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRCDeploymentSetResponseBody;
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
