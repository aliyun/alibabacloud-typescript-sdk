import * as $dara from '@darabonba/typescript';
import { DescribeSQLServerUpgradeVersionsResponseBody } from "./DescribeSqlserverUpgradeVersionsResponseBody";
export declare class DescribeSQLServerUpgradeVersionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLServerUpgradeVersionsResponseBody;
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
