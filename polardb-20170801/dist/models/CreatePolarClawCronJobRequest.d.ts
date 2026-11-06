import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawCronJobRequestDelivery extends $dara.Model {
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
export declare class CreatePolarClawCronJobRequestFailureAlert extends $dara.Model {
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
     * The number of consecutive failures after which an alert is triggered.
     *
     * @example
     * 3
     */
    after?: number;
    /**
     * @remarks
     * The alert channel.
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * The minimum interval between two alerts in milliseconds.
     *
     * @example
     * 5000
     */
    cooldownMs?: number;
    /**
     * @remarks
     * The alert mode. Valid values: announce, webhook.
     *
     * @example
     * announce
     */
    mode?: string;
    /**
     * @remarks
     * The alert target.
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
export declare class CreatePolarClawCronJobRequestPayload extends $dara.Model {
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
     * true
     */
    deliver?: boolean;
    /**
     * @remarks
     * The list of fallback models.
     */
    fallbacks?: string[];
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
     * The thinking level. Valid values: off, minimal, low, medium, high, and xhigh.
     *
     * @example
     * xhigh
     */
    thinking?: string;
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
export declare class CreatePolarClawCronJobRequestSchedule extends $dara.Model {
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
     * The deterministic jitter window in milliseconds.
     *
     * @example
     * 0
     */
    staggerMs?: number;
    /**
     * @remarks
     * The time zone.
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
export declare class CreatePolarClawCronJobRequest extends $dara.Model {
    /**
     * @remarks
     * The specified execution agent.
     *
     * @example
     * main
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * Specifies whether to automatically delete the task after the first execution. Default value: false.
     *
     * @example
     * false
     */
    deleteAfterRun?: boolean;
    /**
     * @remarks
     * The result delivery configuration.
     *
     * @example
     * {"Mode":"announce","Channel":"telegram"}
     */
    delivery?: CreatePolarClawCronJobRequestDelivery;
    /**
     * @remarks
     * The task description.
     *
     * @example
     * Daily report generation
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether the task is enabled. Default value: true.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The failure alert configuration.
     *
     * @example
     * {"After":3,"Channel":"telegram"}
     */
    failureAlert?: CreatePolarClawCronJobRequestFailureAlert;
    /**
     * @remarks
     * The unique name of the task.
     *
     * This parameter is required.
     *
     * @example
     * daily-report
     */
    name?: string;
    /**
     * @remarks
     * The execution payload configuration.
     *
     * This parameter is required.
     *
     * @example
     * {"Kind":"systemEvent","Text":"Generate the daily report."}
     */
    payload?: CreatePolarClawCronJobRequestPayload;
    /**
     * @remarks
     * Specifies whether to restart the gateway after creation. Default value: true.
     *
     * @example
     * true
     */
    restart?: boolean;
    /**
     * @remarks
     * Specifies whether to run the task immediately after creation. Default value: false.
     *
     * @example
     * false
     */
    runImmediately?: boolean;
    /**
     * @remarks
     * The schedule configuration.
     *
     * This parameter is required.
     *
     * @example
     * {"Kind":"cron","Expr":"0 9 * * *","Tz":"Asia/Shanghai"}
     */
    schedule?: CreatePolarClawCronJobRequestSchedule;
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
     * The execution session target. If set to main, it indicates the main session, and Payload.Kind must be systemEvent. If set to isolated or current, it supports agentTurn or systemEvent.
     *
     * This parameter is required.
     *
     * @example
     * main
     */
    sessionTarget?: string;
    /**
     * @remarks
     * The wake mode. Valid values: now and next-heartbeat.
     *
     * This parameter is required.
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
