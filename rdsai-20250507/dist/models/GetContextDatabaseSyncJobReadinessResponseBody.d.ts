import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncJobReadinessResponseBodyDataChecks extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the data source is ready.
     *
     * @example
     * true
     */
    connectionReady?: boolean;
    /**
     * @remarks
     * Indicates whether the import task is enabled.
     *
     * @example
     * true
     */
    jobEnabled?: boolean;
    /**
     * @remarks
     * Indicates whether scheduling is configured.
     *
     * @example
     * true
     */
    scheduleConfigured?: boolean;
    /**
     * @remarks
     * Indicates whether scheduling is not automatically paused.
     *
     * @example
     * true
     */
    scheduleNotAutoPaused?: boolean;
    /**
     * @remarks
     * Indicates whether the selection is confirmed.
     *
     * @example
     * true
     */
    selectionConfirmed?: boolean;
    /**
     * @remarks
     * Indicates whether the target is ready.
     */
    targetReady?: boolean;
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
export declare class GetContextDatabaseSyncJobReadinessResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The reason for the automatic pause.
     *
     * @example
     * Three consecutive execution failures
     */
    autoPauseReason?: string;
    /**
     * @remarks
     * The summary of check items.
     *
     * @example
     * {"jobEnabled":true,"connectionReady":true,"selectionConfirmed":true,"scheduleConfigured":true,"scheduleNotAutoPaused":true}
     */
    checks?: GetContextDatabaseSyncJobReadinessResponseBodyDataChecks;
    /**
     * @remarks
     * Indicates whether the task is ready.
     *
     * @example
     * true
     */
    ready?: boolean;
    /**
     * @remarks
     * Indicates whether the task is ready for a manual run.
     *
     * @example
     * true
     */
    readyForManualRun?: boolean;
    /**
     * @remarks
     * Indicates whether the task is ready for a scheduled run.
     *
     * @example
     * true
     */
    readyForScheduledRun?: boolean;
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
export declare class GetContextDatabaseSyncJobReadinessResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * Sample value
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: GetContextDatabaseSyncJobReadinessResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 1
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message.
     *
     * @example
     * Sample value
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * id-001
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
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
