import * as $dara from '@darabonba/typescript';
import { TransformDBInstancePayTypeResponseBody } from "./TransformDbinstancePayTypeResponseBody";
export declare class TransformDBInstancePayTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: TransformDBInstancePayTypeResponseBody;
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
