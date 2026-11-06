import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawCronJobsResponseBodyJobsDelivery extends $dara.Model {
    /**
     * @remarks
     * The channel account ID.
     *
     * @example
     * default
     */
    accountId?: string;
    /**
     * @remarks
     * Indicates whether to ignore delivery failures.
     *
     * @example
     * false
     */
    bestEffort?: boolean;
    /**
     * @remarks
     * The delivery channel.
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * The delivery mode. Valid values: none, announce, and webhook.
     *
     * @example
     * announce
     */
    mode?: string;
    /**
     * @remarks
     * The delivery target.
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
     * Indicates whether to ignore delivery failures.
     *
     * @example
     * false
     */
    bestEffortDeliver?: boolean;
    /**
     * @remarks
     * The delivery channel ID.
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * Indicates whether to deliver the output to a channel.
     *
     * @example
     * true
     */
    deliver?: boolean;
    /**
     * @remarks
     * The payload type. Valid values: agentTurn and systemEvent.
     *
     * @example
     * systemEvent
     */
    kind?: string;
    /**
     * @remarks
     * Indicates whether to use a lightweight context.
     *
     * @example
     * false
     */
    lightContext?: boolean;
    /**
     * @remarks
     * The agent conversation prompt.
     *
     * @example
     * Generate the daily report.
     */
    message?: string;
    /**
     * @remarks
     * The model override.
     *
     * @example
     * bailian/qwen3.5-plus
     */
    model?: string;
    /**
     * @remarks
     * The system event text.
     *
     * @example
     * Generate the daily report.
     */
    text?: string;
    /**
     * @remarks
     * The execution timeout in seconds.
     *
     * @example
     * 10
     */
    timeoutSeconds?: number;
    /**
     * @remarks
     * The delivery target.
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
     * The number of input tokens.
     *
     * @example
     * 30250
     */
    inputTokens?: number;
    /**
     * @remarks
     * The number of output tokens.
     *
     * @example
     * 30250
     */
    outputTokens?: number;
    /**
     * @remarks
     * The total number of tokens.
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
     * The action. Valid values: finished, error, and skipped.
     *
     * @example
     * finished
     */
    action?: string;
    /**
     * @remarks
     * Indicates whether the run is delivered.
     *
     * @example
     * false
     */
    delivered?: boolean;
    /**
     * @remarks
     * The delivery status.
     *
     * @example
     * not-requested
     */
    deliveryStatus?: string;
    /**
     * @remarks
     * The execution duration in milliseconds.
     *
     * @example
     * 27586
     */
    durationMs?: number;
    /**
     * @remarks
     * The ID of the associated job.
     *
     * @example
     * f83f5278-1abe-40a6-b10e-ad3ecdc05de2
     */
    jobId?: string;
    /**
     * @remarks
     * The job name.
     *
     * @example
     * test
     */
    jobName?: string;
    /**
     * @remarks
     * The model used.
     *
     * @example
     * bailian/qwen3.5-plus
     */
    model?: string;
    /**
     * @remarks
     * The timestamp of the next execution in milliseconds.
     *
     * @example
     * 1777424400000
     */
    nextRunAtMs?: number;
    /**
     * @remarks
     * The model provider.
     *
     * @example
     * bailian
     */
    provider?: string;
    /**
     * @remarks
     * The actual execution timestamp in milliseconds.
     *
     * @example
     * 1777370544931
     */
    runAtMs?: number;
    /**
     * @remarks
     * The ID of the associated session.
     *
     * @example
     * session-123
     */
    sessionId?: string;
    /**
     * @remarks
     * The status. Valid values: ok, error, and skipped.
     *
     * @example
     * ok
     */
    status?: string;
    /**
     * @remarks
     * The execution summary text.
     *
     * @example
     * Generate the daily report.
     */
    summary?: string;
    /**
     * @remarks
     * The execution timestamp in milliseconds.
     *
     * @example
     * 1777370572518
     */
    ts?: number;
    /**
     * @remarks
     * The token usage details.
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
     * The base timestamp for interval alignment.
     *
     * @example
     * 1777370572518
     */
    anchorMs?: number;
    /**
     * @remarks
     * The ISO 8601 timestamp.
     *
     * @example
     * 2026-04-10T09:00:00+08:00
     */
    at?: string;
    /**
     * @remarks
     * The interval in milliseconds.
     *
     * @example
     * 100000
     */
    everyMs?: number;
    /**
     * @remarks
     * The cron expression.
     *
     * @example
     * 0 9 * * *
     */
    expr?: string;
    /**
     * @remarks
     * The schedule type. Valid values: cron, every, and at.
     *
     * @example
     * cron
     */
    kind?: string;
    /**
     * @remarks
     * The IANA time zone.
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
     * The number of consecutive failures.
     *
     * @example
     * 0
     */
    consecutiveErrors?: number;
    /**
     * @remarks
     * The timestamp of the last execution in milliseconds.
     *
     * @example
     * 1777370544931
     */
    lastRunAtMs?: number;
    /**
     * @remarks
     * The status of the last execution.
     *
     * @example
     * ok
     */
    lastRunStatus?: string;
    /**
     * @remarks
     * The timestamp of the next execution in milliseconds.
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
     * The ID of the execution agent.
     *
     * @example
     * main
     */
    agentId?: string;
    /**
     * @remarks
     * The creation timestamp in milliseconds.
     *
     * @example
     * 1777370572517
     */
    createdAtMs?: number;
    /**
     * @remarks
     * Indicates whether the job is deleted after the first execution.
     *
     * @example
     * false
     */
    deleteAfterRun?: boolean;
    /**
     * @remarks
     * The result delivery configuration.
     */
    delivery?: DescribePolarClawCronJobsResponseBodyJobsDelivery;
    /**
     * @remarks
     * The job description.
     *
     * @example
     * Daily report generation
     */
    description?: string;
    /**
     * @remarks
     * Indicates whether the job is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The job ID (UUID).
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
     */
    id?: string;
    /**
     * @remarks
     * The job name.
     *
     * @example
     * test
     */
    name?: string;
    /**
     * @remarks
     * The execution payload.
     */
    payload?: DescribePolarClawCronJobsResponseBodyJobsPayload;
    /**
     * @remarks
     * The execution history.
     */
    runs?: DescribePolarClawCronJobsResponseBodyJobsRuns[];
    /**
     * @remarks
     * The schedule configuration.
     */
    schedule?: DescribePolarClawCronJobsResponseBodyJobsSchedule;
    /**
     * @remarks
     * The session routing key.
     *
     * @example
     * agent:main:feishu:direct:***
     */
    sessionKey?: string;
    /**
     * @remarks
     * The session target. Valid values: main, isolated, and current.
     *
     * @example
     * main
     */
    sessionTarget?: string;
    /**
     * @remarks
     * The execution status.
     */
    state?: DescribePolarClawCronJobsResponseBodyJobsState;
    /**
     * @remarks
     * The update timestamp in milliseconds.
     *
     * @example
     * 1777368967284
     */
    updatedAtMs?: number;
    /**
     * @remarks
     * The wake mode. Valid values: now and next-heartbeat.
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
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The list of scheduled jobs.
     */
    jobs?: DescribePolarClawCronJobsResponseBodyJobs[];
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of jobs.
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
