import * as $dara from '@darabonba/typescript';
import { CalculateDBInstanceWeightResponseBody } from "./CalculateDbinstanceWeightResponseBody";
export declare class CalculateDBInstanceWeightResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CalculateDBInstanceWeightResponseBody;
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
