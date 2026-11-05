import * as $dara from '@darabonba/typescript';
import { TransformDBClusterPayTypeResponseBody } from "./TransformDbclusterPayTypeResponseBody";
export declare class TransformDBClusterPayTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: TransformDBClusterPayTypeResponseBody;
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
