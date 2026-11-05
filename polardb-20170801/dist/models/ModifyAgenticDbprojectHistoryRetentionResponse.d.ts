import * as $dara from '@darabonba/typescript';
import { ModifyAgenticDBProjectHistoryRetentionResponseBody } from "./ModifyAgenticDbprojectHistoryRetentionResponseBody";
export declare class ModifyAgenticDBProjectHistoryRetentionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAgenticDBProjectHistoryRetentionResponseBody;
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
