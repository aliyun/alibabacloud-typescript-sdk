import * as $dara from '@darabonba/typescript';
export declare class DescribePolarAgentChatRecordsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The reply.
     *
     * @example
     * Call DescribeDBClusters and check DBClusterStatus
     */
    answer?: string;
    /**
     * @remarks
     * The feedback type.
     *
     * @example
     * 0
     */
    feedbackType?: string;
    /**
     * @remarks
     * The session query. You can obtain this value from the response of the API operation that starts a digital human.
     *
     * @example
     * How do I query the cluster status?
     */
    query?: string;
    /**
     * @remarks
     * The query ID.
     *
     * @example
     * sq202506261002hz8b24fe80067683
     */
    queryId?: string;
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 44dcdf31-04cd-4a44-9bae-834dd6657e29
     */
    sessionId?: string;
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
export declare class DescribePolarAgentChatRecordsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result set.
     */
    data?: DescribePolarAgentChatRecordsResponseBodyData[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
     */
    requestId?: string;
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
