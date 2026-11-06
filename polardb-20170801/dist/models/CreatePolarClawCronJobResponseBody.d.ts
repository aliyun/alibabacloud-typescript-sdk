import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawCronJobResponseBodyJobDelivery extends $dara.Model {
    /**
     * @remarks
     * The ID of the channel account.
     *
     * @example
     * default
     */
    accountId?: string;
    /**
     * @remarks
     * Specifies whether to ignore delivery failures.
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
export declare class CreatePolarClawCronJobResponseBodyJobPayload extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to ignore delivery failures.
     *
     * @example
     * false
     */
    bestEffortDeliver?: boolean;
    /**
     * @remarks
     * The ID of the delivery channel.
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * Specifies whether to deliver the output to a channel.
     *
     * @example
     * false
     */
    deliver?: boolean;
    /**
     * @remarks
     * The payload type. Valid values: agentTurn and systemEvent.
     *
     * @example
     * agentTurn
     */
    kind?: string;
    /**
     * @remarks
     * Specifies whether to use a lightweight context.
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
export declare class CreatePolarClawCronJobResponseBodyJobRunsUsage extends $dara.Model {
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
export declare class CreatePolarClawCronJobResponseBodyJobRuns extends $dara.Model {
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
     * Indicates whether the job run has been delivered.
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
     * The model used for the execution.
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
     * The provider of the model.
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
     * The text of the execution summary.
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
     * The details of token usage.
     */
    usage?: CreatePolarClawCronJobResponseBodyJobRunsUsage;
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
export declare class CreatePolarClawCronJobResponseBodyJobSchedule extends $dara.Model {
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
     * 1000
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
export declare class CreatePolarClawCronJobResponseBodyJobState extends $dara.Model {
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
export declare class CreatePolarClawCronJobResponseBodyJob extends $dara.Model {
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
     * 1777368967284
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
    delivery?: CreatePolarClawCronJobResponseBodyJobDelivery;
    /**
     * @remarks
     * The task description.
     *
     * @example
     * test
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
     * e2c57423-12f0-45cc-a387-6155168b3201
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
    payload?: CreatePolarClawCronJobResponseBodyJobPayload;
    /**
     * @remarks
     * The execution history.
     */
    runs?: CreatePolarClawCronJobResponseBodyJobRuns[];
    /**
     * @remarks
     * The schedule configuration.
     */
    schedule?: CreatePolarClawCronJobResponseBodyJobSchedule;
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
     * The execution state.
     */
    state?: CreatePolarClawCronJobResponseBodyJobState;
    /**
     * @remarks
     * The update timestamp in milliseconds.
     *
     * @example
     * 1777370572517
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
export declare class CreatePolarClawCronJobResponseBody extends $dara.Model {
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
     * The details of the created scheduled job.
     */
    job?: CreatePolarClawCronJobResponseBodyJob;
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
     * Indicates whether the operation is successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * Indicates whether the job was executed immediately and succeeded.
     *
     * @example
     * false
     */
    ranImmediately?: boolean;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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
