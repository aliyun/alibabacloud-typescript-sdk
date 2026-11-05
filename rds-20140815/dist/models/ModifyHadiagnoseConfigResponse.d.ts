import * as $dara from '@darabonba/typescript';
import { ModifyHADiagnoseConfigResponseBody } from "./ModifyHadiagnoseConfigResponseBody";
export declare class ModifyHADiagnoseConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyHADiagnoseConfigResponseBody;
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
