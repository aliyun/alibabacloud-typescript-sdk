import * as $dara from '@darabonba/typescript';
import { ListServiceEndpointsResponseBody } from "./ListServiceEndpointsResponseBody";
export declare class ListServiceEndpointsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListServiceEndpointsResponseBody;
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
