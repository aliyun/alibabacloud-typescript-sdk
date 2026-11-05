import * as $dara from '@darabonba/typescript';
export declare class DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule extends $dara.Model {
    /**
     * @remarks
     * The list of contact group names.
     */
    contactGroupNames?: string[];
    /**
     * @remarks
     * The last trigger time.
     *
     * @example
     * 2026-07-23 10:20:30
     */
    lastTriggeredAt?: string;
    /**
     * @remarks
     * The percentage of the quota alert threshold.
     *
     * @example
     * 80
     */
    thresholdPercent?: number;
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
export declare class DescribeGroupsResponseBodyGroupsInstances extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud user ID.
     *
     * @example
     * 1712418364463000
     */
    aliUid?: number;
    /**
     * @remarks
     * The expiration time. The time is in ISO 8601 format and the UTC time zone.
     *
     * @example
     * 2026-09-05T15:59Z
     */
    expiredTime?: string;
    /**
     * @remarks
     * Specifies whether the instance is on a free trial.
     *
     * @example
     * false
     */
    freeTrial?: boolean;
    /**
     * @remarks
     * The group resource type.
     *
     * @example
     * GROUP_CORE_PACKAGE
     */
    groupResourceType?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * chp-0c1g77wmw50b6cXXX
     */
    instanceId?: string;
    /**
     * @remarks
     * The purchase period.
     *
     * @example
     * 1
     */
    period?: number;
    /**
     * @remarks
     * The end time of the current period. The time is in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2026-10-01 00:00:00
     */
    periodEndTime?: string;
    /**
     * @remarks
     * The start time of the current period. The time is in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2026-09-01 00:00:00
     */
    periodStartTime?: string;
    /**
     * @remarks
     * The period unit.
     *
     * @example
     * Year
     */
    periodUnit?: string;
    /**
     * @remarks
     * Specifies whether priority deduction is enabled.
     *
     * @example
     * true
     */
    priorityDeduction?: boolean;
    /**
     * @remarks
     * The resource type.
     *
     * @example
     * GROUP_CORE_PACKAGE
     */
    resourceType?: string;
    /**
     * @remarks
     * The start time. The time is in ISO 8601 format and the UTC time zone.
     *
     * @example
     * 2026-08-05T02:31Z
     */
    startTime?: string;
    /**
     * @remarks
     * The state.
     *
     * @example
     * DEDUCTING
     */
    state?: string;
    /**
     * @remarks
     * The total duration.
     *
     * @example
     * 180000000
     */
    totalTime?: number;
    /**
     * @remarks
     * The total duration with a precision factor.
     *
     * @example
     * 2000.0000
     */
    totalTimeDecimal?: string;
    /**
     * @remarks
     * The usage Threshold Alerting rule.
     */
    usageAlertRule?: DescribeGroupsResponseBodyGroupsInstancesUsageAlertRule;
    /**
     * @remarks
     * The usage duration.
     *
     * @example
     * 26959861
     */
    usedTime?: number;
    /**
     * @remarks
     * The usage duration with a precision factor.
     *
     * @example
     * 11.0000
     */
    usedTimeDecimal?: string;
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
export declare class DescribeGroupsResponseBodyGroups extends $dara.Model {
    /**
     * @remarks
     * The group ID.
     *
     * @example
     * group-0c5ambj9yaeqjpXXX
     */
    groupId?: string;
    /**
     * @remarks
     * The number of instances.
     *
     * @example
     * 100
     */
    instanceCount?: number;
    /**
     * @remarks
     * The list of instance information.
     */
    instances?: DescribeGroupsResponseBodyGroupsInstances[];
    /**
     * @remarks
     * The core-hour usage in the last week.
     *
     * @example
     * 85949.99
     */
    lastWeekUsedCoreTime?: number;
    /**
     * @remarks
     * The remaining core-hours.
     *
     * @example
     * 92511.15
     */
    leftCoreTime?: number;
    /**
     * @remarks
     * The list of resource IDs.
     */
    resourceIds?: string[];
    /**
     * @remarks
     * The total duration with a precision factor.
     *
     * @example
     * 2000.0000
     */
    totalTimeDecimal?: string;
    /**
     * @remarks
     * The used core-hours.
     *
     * @example
     * 7488.85
     */
    usedCoreTime?: number;
    /**
     * @remarks
     * The usage duration with a precision factor.
     *
     * @example
     * 11.0000
     */
    usedTimeDecimal?: string;
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
export declare class DescribeGroupsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of groups.
     */
    groups?: DescribeGroupsResponseBodyGroups[];
    /**
     * @remarks
     * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the `nextToken` value returned in the previous response.
     *
     * @example
     * eyJvZmZzZXQiOjIwfQ==
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 68BD3312-53D8-123E-BB32-1A9F25E07A03
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
