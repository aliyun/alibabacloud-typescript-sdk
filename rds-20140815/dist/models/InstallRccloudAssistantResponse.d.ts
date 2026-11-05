import * as $dara from '@darabonba/typescript';
import { InstallRCCloudAssistantResponseBody } from "./InstallRccloudAssistantResponseBody";
export declare class InstallRCCloudAssistantResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: InstallRCCloudAssistantResponseBody;
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
