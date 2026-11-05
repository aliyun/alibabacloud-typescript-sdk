import * as $dara from '@darabonba/typescript';
import { ExportRbacConfigResponseBody } from "./ExportRbacConfigResponseBody";
export declare class ExportRbacConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ExportRbacConfigResponseBody;
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
