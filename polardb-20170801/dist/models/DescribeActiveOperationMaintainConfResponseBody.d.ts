import * as $dara from '@darabonba/typescript';
export declare class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
    /**
     * @remarks
     * The time when the configuration was created. Format: YYYY-MM-DDTHH:mm:ss.
     *
     * @example
     * 2023-07-04T19:28:46
     */
    createdTime?: string;
    /**
     * @remarks
     * The cycle time.
     * - If CycleType is set to Month, the return value is a number from 1 to 28, which indicates the day of the month. Multiple values are separated by commas (,).
     * - If CycleType is set to Week, the return value is a number from 1 to 7, which indicates the day of the week. Multiple values are separated by commas (,).
     *
     * @example
     * 1
     */
    cycleTime?: string;
    /**
     * @remarks
     * The cycle type. Valid values:
     * - Month: Monthly.
     * - Week: Weekly.
     *
     * @example
     * 1
     */
    cycleType?: number;
    /**
     * @remarks
     * The end time of the maintenance window. The time is in UTC and in the HH:mmZ format.
     *
     * @example
     * 09:00Z
     */
    maintainEndTime?: string;
    /**
     * @remarks
     * The start time of the maintenance window. The time is in UTC, for example, 8:00Z.
     *
     * @example
     * 8:00Z
     */
    maintainStartTime?: string;
    /**
     * @remarks
     * The time when the configuration was modified. The time follows the ISO 8601 standard and is in UTC. Format: YYYY-MM-DDTHH:mm:ssZ.
     *
     * @example
     * 2025-04-02T02:10:08Z
     */
    modifiedTime?: string;
    /**
     * @remarks
     * Indicates whether the configuration is effective. Valid values:
     * - 1: Yes.
     * - 2: No.
     *
     * @example
     * 1
     */
    status?: number;
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
export declare class DescribeActiveOperationMaintainConfResponseBody extends $dara.Model {
    /**
     * @remarks
     * The configuration information.
     */
    config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
    /**
     * @remarks
     * Indicates whether the configuration has been created. Valid values:
     * - 1: Yes.
     * - 0: No. If this is your first access, the value is 0.
     *
     * @example
     * 0
     */
    hasConfig?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 14109129-EF13-5C83-AD86-7581D9552603
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
