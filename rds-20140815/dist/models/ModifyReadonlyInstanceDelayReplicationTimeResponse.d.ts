import * as $dara from '@darabonba/typescript';
import { ModifyReadonlyInstanceDelayReplicationTimeResponseBody } from "./ModifyReadonlyInstanceDelayReplicationTimeResponseBody";
export declare class ModifyReadonlyInstanceDelayReplicationTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyReadonlyInstanceDelayReplicationTimeResponseBody;
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
