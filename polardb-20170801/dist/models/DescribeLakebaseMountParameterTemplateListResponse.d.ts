import * as $dara from '@darabonba/typescript';
import { DescribeLakebaseMountParameterTemplateListResponseBody } from "./DescribeLakebaseMountParameterTemplateListResponseBody";
export declare class DescribeLakebaseMountParameterTemplateListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLakebaseMountParameterTemplateListResponseBody;
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
