import * as $dara from '@darabonba/typescript';
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue extends $dara.Model {
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
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $dara.Model {
    performanceValue?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue[];
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
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
    key?: string;
    node?: string;
    server?: string;
    service?: string;
    valueFormat?: string;
    values?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
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
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceKey?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey[];
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
export declare class DescribeDBProxyPerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the monitored instance.
     *
     * @example
     * lsme****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * An internal parameter. You can ignore this parameter.
     *
     * @example
     * normal
     */
    DBProxyEngineType?: string;
    /**
     * @remarks
     * The end time of the query.
     *
     * @example
     * 2019-09-21T18:00:00Z
     */
    endTime?: string;
    performanceKeys?: DescribeDBProxyPerformanceResponseBodyPerformanceKeys;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * DD31056F-A0CE-41D7-AD39-689B6ABAE982
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query.
     *
     * @example
     * 2019-09-19T01:00:00Z
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
