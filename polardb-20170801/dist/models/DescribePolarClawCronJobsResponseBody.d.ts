import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawCronJobsResponseBodyJobsDelivery extends $dara.Model {
    /**
     * @remarks
     * Channel account ID
     *
     * @example
     * default
     */
    accountId?: string;
    /**
     * @remarks
     * Ignore delivery failures
     *
     * @example
     * false
     */
    bestEffort?: boolean;
    /**
     * @remarks
     * Delivery channel
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * Delivery mode: none/announce/webhook
     *
     * @example
     * announce
     */
    mode?: string;
    /**
     * @remarks
     * Delivery destination
     *
     * @example
     * ou_***
     */
    to?: string;
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
export declare class DescribePolarClawCronJobsResponseBodyJobsPayload extends $dara.Model {
    /**
     * @remarks
     * Ignore delivery failures
     *
     * @example
     * false
     */
    bestEffortDeliver?: boolean;
    /**
     * @remarks
     * Delivery channel ID
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * Deliver output to channel
     *
     * @example
     * true
     */
    deliver?: boolean;
    /**
     * @remarks
     * Payload type: agentTurn/systemEvent
     *
     * @example
     * systemEvent
     */
    kind?: string;
    /**
     * @remarks
     * Indicates whether lightweight context is used.
     *
     * @example
     * false
     */
    lightContext?: boolean;
    /**
     * @remarks
     * Agent conversation prompt
     *
     * @example
     * Generate the daily report.
     */
    message?: string;
    /**
     * @remarks
     * Model override
     *
     * @example
     * bailian/qwen3.5-plus
     */
    model?: string;
    /**
     * @remarks
     * System event text
     *
     * @example
     * Generate the daily report.
     */
    text?: string;
    /**
     * @remarks
     * Execution timeout in seconds
     *
     * @example
     * 10
     */
    timeoutSeconds?: number;
    /**
     * @remarks
     * Delivery destination
     *
     * @example
     * ou_***
     */
    to?: string;
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
export declare class DescribePolarClawCronJobsResponseBodyJobsRunsUsage extends $dara.Model {
    /**
     * @remarks
     * Number of input tokens
     *
     * @example
     * 30250
     */
    inputTokens?: number;
    /**
     * @remarks
     * Number of output tokens
     *
     * @example
     * 30250
     */
    outputTokens?: number;
    /**
     * @remarks
     * Total number of tokens
     *
     * @example
     * 60500
     */
    totalTokens?: number;
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
export declare class DescribePolarClawCronJobsResponseBodyJobsRuns extends $dara.Model {
    /**
     * @remarks
     * Action: finished/error/skipped
     *
     * @example
     * finished
     */
    action?: string;
    /**
     * @remarks
     * Indicates whether the job has been delivered.
     *
     * @example
     * false
     */
    delivered?: boolean;
    /**
     * @remarks
     * Delivery status
     *
     * @example
     * not-requested
     */
    deliveryStatus?: string;
    /**
     * @remarks
     * Execution duration (milliseconds)
     *
     * @example
     * 27586
     */
    durationMs?: number;
    /**
     * @remarks
     * Associated task ID
     *
     * @example
     * f83f5278-1abe-40a6-b10e-ad3ecdc05de2
     */
    jobId?: string;
    /**
     * @remarks
     * Task name
     *
     * @example
     * test
     */
    jobName?: string;
    /**
     * @remarks
     * Model used
     *
     * @example
     * bailian/qwen3.5-plus
     */
    model?: string;
    /**
     * @remarks
     * Next execution timestamp (milliseconds)
     *
     * @example
     * 1777424400000
     */
    nextRunAtMs?: number;
    /**
     * @remarks
     * Model provider
     *
     * @example
     * bailian
     */
    provider?: string;
    /**
     * @remarks
     * Actual execution timestamp (milliseconds)
     *
     * @example
     * 1777370544931
     */
    runAtMs?: number;
    /**
     * @remarks
     * Associated session ID
     *
     * @example
     * ***
     */
    sessionId?: string;
    /**
     * @remarks
     * Status: ok/error/skipped
     *
     * @example
     * ok
     */
    status?: string;
    /**
     * @remarks
     * Run summary text
     *
     * @example
     * Generate the daily report.
     */
    summary?: string;
    /**
     * @remarks
     * Run timestamp (milliseconds)
     *
     * @example
     * 1777370572518
     */
    ts?: number;
    /**
     * @remarks
     * Token usage details
     */
    usage?: DescribePolarClawCronJobsResponseBodyJobsRunsUsage;
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
export declare class DescribePolarClawCronJobsResponseBodyJobsSchedule extends $dara.Model {
    /**
     * @remarks
     * Alignment anchor timestamp for interval
     *
     * @example
     * 1777370572518
     */
    anchorMs?: number;
    /**
     * @remarks
     * ISO 8601 timestamp
     *
     * @example
     * 2026-04-10T09:00:00+08:00
     */
    at?: string;
    /**
     * @remarks
     * Interval in milliseconds
     *
     * @example
     * 100000
     */
    everyMs?: number;
    /**
     * @remarks
     * Cron expression
     *
     * @example
     * 0 9 * * *
     */
    expr?: string;
    /**
     * @remarks
     * Schedule type: cron/every/at
     *
     * @example
     * cron
     */
    kind?: string;
    /**
     * @remarks
     * IANA time zone
     *
     * @example
     * Asia/Shanghai
     */
    tz?: string;
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
export declare class DescribePolarClawCronJobsResponseBodyJobsState extends $dara.Model {
    /**
     * @remarks
     * Number of consecutive failures
     *
     * @example
     * 0
     */
    consecutiveErrors?: number;
    /**
     * @remarks
     * Last execution timestamp (milliseconds)
     *
     * @example
     * 1777370544931
     */
    lastRunAtMs?: number;
    /**
     * @remarks
     * Last execution status
     *
     * @example
     * ok
     */
    lastRunStatus?: string;
    /**
     * @remarks
     * Next execution timestamp (milliseconds)
     *
     * @example
     * 1777424400000
     */
    nextRunAtMs?: number;
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
export declare class DescribePolarClawCronJobsResponseBodyJobs extends $dara.Model {
    /**
     * @remarks
     * Execution Agent ID
     *
     * @example
     * main
     */
    agentId?: string;
    /**
     * @remarks
     * Creation timestamp (milliseconds)
     *
     * @example
     * 1777370572517
     */
    createdAtMs?: number;
    /**
     * @remarks
     * Delete after first execution
     *
     * @example
     * false
     */
    deleteAfterRun?: boolean;
    /**
     * @remarks
     * Result delivery configuration
     */
    delivery?: DescribePolarClawCronJobsResponseBodyJobsDelivery;
    /**
     * @remarks
     * Task description
     *
     * @example
     * Daily report generation
     */
    description?: string;
    /**
     * @remarks
     * Whether enabled
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * Task ID (UUID)
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
     */
    id?: string;
    /**
     * @remarks
     * Task name
     *
     * @example
     * test
     */
    name?: string;
    /**
     * @remarks
     * Execution payload
     */
    payload?: DescribePolarClawCronJobsResponseBodyJobsPayload;
    /**
     * @remarks
     * Run history
     */
    runs?: DescribePolarClawCronJobsResponseBodyJobsRuns[];
    /**
     * @remarks
     * Scheduling Configuration
     */
    schedule?: DescribePolarClawCronJobsResponseBodyJobsSchedule;
    /**
     * @remarks
     * Session routing key
     *
     * @example
     * agent:main:feishu:direct:***
     */
    sessionKey?: string;
    /**
     * @remarks
     * Session target: main/isolated/current
     *
     * @example
     * main
     */
    sessionTarget?: string;
    /**
     * @remarks
     * Run status
     */
    state?: DescribePolarClawCronJobsResponseBodyJobsState;
    /**
     * @remarks
     * Update timestamp (milliseconds)
     *
     * @example
     * 1777368967284
     */
    updatedAtMs?: number;
    /**
     * @remarks
     * Wake mode: now/next-heartbeat
     *
     * @example
     * now
     */
    wakeMode?: string;
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
export declare class DescribePolarClawCronJobsResponseBody extends $dara.Model {
    /**
     * @remarks
     * Application ID
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * Status code
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * List of scheduled tasks
     */
    jobs?: DescribePolarClawCronJobsResponseBodyJobs[];
    /**
     * @remarks
     * Response message
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * Request ID
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
    /**
     * @remarks
     * Total number of tasks
     *
     * @example
     * 1
     */
    total?: number;
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
