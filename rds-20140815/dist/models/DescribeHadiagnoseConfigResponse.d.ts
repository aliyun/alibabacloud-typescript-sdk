import * as $dara from '@darabonba/typescript';
import { DescribeHADiagnoseConfigResponseBody } from "./DescribeHadiagnoseConfigResponseBody";
export declare class DescribeHADiagnoseConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHADiagnoseConfigResponseBody;
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
