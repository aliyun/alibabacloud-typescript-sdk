import * as $dara from '@darabonba/typescript';
import { AddRCInstancesToDeploymentSetResponseBody } from "./AddRcinstancesToDeploymentSetResponseBody";
export declare class AddRCInstancesToDeploymentSetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddRCInstancesToDeploymentSetResponseBody;
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
