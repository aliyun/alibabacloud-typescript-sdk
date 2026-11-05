import * as $dara from '@darabonba/typescript';
export declare class DescribeDeductionStatisticResponseBodyDataAvailableCorePackages extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud UID.
     *
     * @example
     * 1568857911493620
     */
    aliUid?: number;
    /**
     * @remarks
     * The creation time in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2024-01-01 00:00:00
     */
    createTime?: string;
    /**
     * @remarks
     * The end time in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2024-12-31 23:59:59
     */
    endTime?: string;
    /**
     * @remarks
     * The expiration time in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2024-12-31 23:59:59
     */
    expiredTime?: string;
    /**
     * @remarks
     * The group ID.
     *
     * @example
     * g-xxxxx
     */
    groupId?: string;
    /**
     * @remarks
     * The group resource type.
     *
     * @example
     * CoreHour
     */
    groupResourceType?: string;
    /**
     * @remarks
     * Indicates whether LingXiao is excluded.
     */
    noLx?: boolean;
    /**
     * @remarks
     * The source when LingXiao is excluded.
     *
     * @example
     * 无凌霄来源示例值
     */
    noLxSource?: string;
    /**
     * @remarks
     * The resource ID.
     *
     * @example
     * res-xxxxx
     */
    resourceId?: string;
    /**
     * @remarks
     * The group resource type.
     *
     * @example
     * CoreHour
     */
    resourceType?: string;
    /**
     * @remarks
     * The start time in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2024-01-01 00:00:00
     */
    startTime?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The total duration.
     *
     * @example
     * 1000000
     */
    totalTime?: number;
    /**
     * @remarks
     * The used duration.
     *
     * @example
     * 40000
     */
    usedTime?: number;
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
export declare class DescribeDeductionStatisticResponseBodyDataDeductions extends $dara.Model {
    /**
     * @remarks
     * The consumption duration, in seconds.
     *
     * @example
     * 7000
     */
    consumeSecond?: number;
    /**
     * @remarks
     * The deduction date in the YYYY-MM-DD format.
     *
     * @example
     * 2024-01-01
     */
    deductionDate?: string;
    /**
     * @remarks
     * The resource type.
     *
     * @example
     * CloudDesktop
     */
    resourceType?: string;
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
export declare class DescribeDeductionStatisticResponseBodyDataUsages extends $dara.Model {
    /**
     * @remarks
     * **The consumption duration, in seconds.**
     *
     * @example
     * 6000
     */
    consumeSecond?: number;
    /**
     * @remarks
     * **The time period.**
     *
     * @example
     * 2024-01-01
     */
    period?: string;
    /**
     * @remarks
     * **The resource type.**
     *
     * @example
     * CloudDesktop
     */
    resourceType?: string;
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
export declare class DescribeDeductionStatisticResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * **The list of available core-hour package resources.**
     */
    availableCorePackages?: DescribeDeductionStatisticResponseBodyDataAvailableCorePackages[];
    /**
     * @remarks
     * The deduction details.
     */
    deductions?: DescribeDeductionStatisticResponseBodyDataDeductions[];
    /**
     * @remarks
     * **The list of usage records.**
     */
    usages?: DescribeDeductionStatisticResponseBodyDataUsages[];
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
export declare class DescribeDeductionStatisticResponseBody extends $dara.Model {
    /**
     * @remarks
     * The deduction data.
     */
    data?: DescribeDeductionStatisticResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-xxxx-xxxx-xxxx-xxxxxxxxxxxx
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
