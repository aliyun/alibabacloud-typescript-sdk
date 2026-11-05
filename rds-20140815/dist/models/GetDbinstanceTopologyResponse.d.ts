import * as $dara from '@darabonba/typescript';
import { GetDBInstanceTopologyResponseBody } from "./GetDbinstanceTopologyResponseBody";
export declare class GetDBInstanceTopologyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetDBInstanceTopologyResponseBody;
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
