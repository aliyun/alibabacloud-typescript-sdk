import * as $dara from '@darabonba/typescript';
import { UpdateMcpTemplateConfigResponseBody } from "./UpdateMcpTemplateConfigResponseBody";
export declare class UpdateMcpTemplateConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateMcpTemplateConfigResponseBody;
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
