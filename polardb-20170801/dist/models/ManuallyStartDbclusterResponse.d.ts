import * as $dara from '@darabonba/typescript';
import { ManuallyStartDBClusterResponseBody } from "./ManuallyStartDbclusterResponseBody";
export declare class ManuallyStartDBClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ManuallyStartDBClusterResponseBody;
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
