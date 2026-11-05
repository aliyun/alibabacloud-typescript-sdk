import * as $dara from '@darabonba/typescript';
export declare class GetContextDatabaseSyncJobScheduleResponseBodyData extends $dara.Model {
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
     * Indicates whether the task is automatically paused.
     *
     * @example
     * true
     */
    autoPaused?: boolean;
    /**
     * @remarks
     * The list of daily trigger times for daily-times scheduling in the HH:mm 24-hour format. The number of times ranges from 1 to 6.
     *
     * @example
     * ["09:00", "18:00"]
     */
    dailyTimes?: string[];
    /**
     * @remarks
     * The interval in minutes for interval scheduling. The minimum value is 10.
     *
     * @example
     * 12
     */
    intervalMinutes?: number;
    /**
     * @remarks
     * The processing policy for missed schedules. Valid values: skip and catch-up.
     *
     * @example
     * skip
     */
    missedPolicy?: string;
    /**
     * @remarks
     * The next run time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    nextRunAt?: string;
    /**
     * @remarks
     * The time zone.
     *
     * @example
     * Asia/Shanghai
     */
    timezone?: string;
    /**
     * @remarks
     * The scheduling type. Valid values: interval and daily-times.
     *
     * @example
     * daily-times
     */
    type?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2026-09-23T10:00:00+08:00
     */
    updatedAt?: string;
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
export declare class GetContextDatabaseSyncJobScheduleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * Example value
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: GetContextDatabaseSyncJobScheduleResponseBodyData;
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
     * Example value
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
