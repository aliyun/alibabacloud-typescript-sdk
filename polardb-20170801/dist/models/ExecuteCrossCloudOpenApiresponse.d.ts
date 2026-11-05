import * as $dara from '@darabonba/typescript';
import { ExecuteCrossCloudOpenAPIResponseBody } from "./ExecuteCrossCloudOpenApiresponseBody";
export declare class ExecuteCrossCloudOpenAPIResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ExecuteCrossCloudOpenAPIResponseBody;
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
