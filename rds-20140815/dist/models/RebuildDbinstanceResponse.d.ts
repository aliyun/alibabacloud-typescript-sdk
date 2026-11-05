import * as $dara from '@darabonba/typescript';
import { RebuildDBInstanceResponseBody } from "./RebuildDbinstanceResponseBody";
export declare class RebuildDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RebuildDBInstanceResponseBody;
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
