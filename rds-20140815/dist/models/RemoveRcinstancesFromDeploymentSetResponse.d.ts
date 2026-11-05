import * as $dara from '@darabonba/typescript';
import { RemoveRCInstancesFromDeploymentSetResponseBody } from "./RemoveRcinstancesFromDeploymentSetResponseBody";
export declare class RemoveRCInstancesFromDeploymentSetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveRCInstancesFromDeploymentSetResponseBody;
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
