import * as $dara from '@darabonba/typescript';
export declare class DescribeDeductionStatisticRequestPeriods extends $dara.Model {
    /**
     * @remarks
     * The base time in the YYYY-MM-DD format.
     *
     * @example
     * 2024-01-01
     */
    baseTime?: string;
    /**
     * @remarks
     * The time period unit. For more information, see the `PeriodUnit` enumeration.
     *
     * @example
     * Year
     */
    periodUnit?: string;
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
export declare class DescribeDeductionStatisticRequest extends $dara.Model {
    /**
     * @remarks
     * The end time of the query. UNIX timestamp, in milliseconds.
     *
     * @example
     * 1749176040000
     */
    endTime?: number;
    /**
     * @remarks
     * The list of instance IDs in JSON array format.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The list of time periods in JSON array format. Each element is a `PeriodParam` object.
     *
     * **if can be null:**
     * true
     */
    periods?: DescribeDeductionStatisticRequestPeriods[];
    /**
     * @remarks
     * The list of resource types in JSON array format.
     */
    resourceTypes?: string[];
    /**
     * @remarks
     * The start time of the query. UNIX timestamp, in milliseconds.
     *
     * @example
     * 1774022400000
     */
    startTime?: number;
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
