import * as $dara from '@darabonba/typescript';
import { GetAppFileContentResponseBody } from "./GetAppFileContentResponseBody";
export declare class GetAppFileContentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppFileContentResponseBody;
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
