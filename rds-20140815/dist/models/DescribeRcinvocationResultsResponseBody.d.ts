import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInvocationResultsResponseBodyInvocationResultsTags extends $dara.Model {
    tagKey?: string;
    tagValue?: string;
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
export declare class DescribeRCInvocationResultsResponseBodyInvocationResults extends $dara.Model {
    commandId?: string;
    containerId?: string;
    containerName?: string;
    dropped?: number;
    errorCode?: string;
    errorInfo?: string;
    exitCode?: number;
    finishedTime?: string;
    instanceId?: string;
    invocationStatus?: string;
    invokeId?: string;
    invokeRecordStatus?: string;
    output?: string;
    repeats?: string;
    startTime?: string;
    stopTime?: string;
    tags?: DescribeRCInvocationResultsResponseBodyInvocationResultsTags[];
    username?: string;
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
export declare class DescribeRCInvocationResultsResponseBody extends $dara.Model {
    invocationResults?: DescribeRCInvocationResultsResponseBodyInvocationResults[];
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
