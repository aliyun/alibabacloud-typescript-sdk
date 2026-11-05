import * as $dara from '@darabonba/typescript';
export declare class DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
    activeTaskCount?: number;
    cloudAssistantStatus?: string;
    cloudAssistantVersion?: string;
    instanceId?: string;
    invocationCount?: number;
    lastHeartbeatTime?: string;
    lastInvokedTime?: string;
    /**
     * @example
     * Linux
     */
    OSType?: string;
    supportSessionManager?: boolean;
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
export declare class DescribeRCCloudAssistantStatusResponseBody extends $dara.Model {
    instanceCloudAssistantStatusSet?: DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet[];
    /**
     * @remarks
     * This parameter is required.
     */
    nextToken?: string;
    pageNumber?: string;
    pageSize?: string;
    requestId?: string;
    totalCount?: number;
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
