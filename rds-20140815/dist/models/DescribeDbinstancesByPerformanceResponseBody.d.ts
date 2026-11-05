import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance extends $dara.Model {
    CPUUsage?: string;
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    diskUsage?: string;
    IOPSUsage?: string;
    sessionUsage?: string;
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
export declare class DescribeDBInstancesByPerformanceResponseBodyItems extends $dara.Model {
    DBInstancePerformance?: DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance[];
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
export declare class DescribeDBInstancesByPerformanceResponseBody extends $dara.Model {
    items?: DescribeDBInstancesByPerformanceResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of instances on the current page.
     *
     * @example
     * 28
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 23907437-79B9-411A-9EE6-75A8F0F1C619
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of queried instances.
     *
     * @example
     * 28
     */
    totalRecordCount?: number;
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
