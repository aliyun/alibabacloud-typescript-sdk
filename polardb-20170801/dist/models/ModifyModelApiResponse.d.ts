import * as $dara from '@darabonba/typescript';
import { ModifyModelApiResponseBody } from "./ModifyModelApiResponseBody";
export declare class ModifyModelApiResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyModelApiResponseBody;
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
