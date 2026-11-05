import * as $dara from '@darabonba/typescript';
import { ModifyInstanceRAGConfigResponseBody } from "./ModifyInstanceRagconfigResponseBody";
export declare class ModifyInstanceRAGConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceRAGConfigResponseBody;
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
