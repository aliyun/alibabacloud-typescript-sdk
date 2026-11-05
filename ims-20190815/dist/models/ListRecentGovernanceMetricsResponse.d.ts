import * as $dara from '@darabonba/typescript';
import { ListRecentGovernanceMetricsResponseBody } from "./ListRecentGovernanceMetricsResponseBody";
export declare class ListRecentGovernanceMetricsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListRecentGovernanceMetricsResponseBody;
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
