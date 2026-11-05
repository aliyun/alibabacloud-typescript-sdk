import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue extends $dara.Model {
    date?: string;
    value?: string;
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
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $dara.Model {
    performanceValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue[];
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
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
    key?: string;
    unit?: string;
    valueFormat?: string;
    values?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
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
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceKey?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey[];
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
export declare class DescribeDBInstancePerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The end time of the query. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
     *
     * @example
     * 2012-06-19T15:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * MySQL
     */
    engine?: string;
    performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * A5409D02-D661-4BF3-8F3D-0A814D0574E7
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
     *
     * @example
     * 2012-06-10T15:00Z
     */
    startTime?: string;
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
