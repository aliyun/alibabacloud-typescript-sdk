import * as $dara from '@darabonba/typescript';
import { DescribeRCResourcesModificationResponseBody } from "./DescribeRcresourcesModificationResponseBody";
export declare class DescribeRCResourcesModificationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCResourcesModificationResponseBody;
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
