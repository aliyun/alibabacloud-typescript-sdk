import * as $dara from '@darabonba/typescript';
import { ReportChannelPublishResultResponseBody } from "./ReportChannelPublishResultResponseBody";
export declare class ReportChannelPublishResultResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReportChannelPublishResultResponseBody;
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
