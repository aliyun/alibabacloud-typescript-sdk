import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
    createTime?: string;
    DBClusterId?: string;
    DBInstanceClass?: string;
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    DBInstanceStatus?: string;
    DBInstanceType?: string;
    DBType?: string;
    DBVersion?: string;
    engine?: string;
    expireTime?: string;
    instanceNetworkType?: string;
    lockMode?: string;
    lockReason?: string;
    payType?: string;
    regionId?: string;
    vSwitchId?: string;
    vpcId?: string;
    zoneId?: string;
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
export declare class DescribeDBInstancesResponseBodyItems extends $dara.Model {
    DBInstance?: DescribeDBInstancesResponseBodyItemsDBInstance[];
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
export declare class DescribeDBInstancesResponseBody extends $dara.Model {
    items?: DescribeDBInstancesResponseBodyItems;
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
     * The number of entries on the current page.
     *
     * @example
     * 2
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 03C46A7A-E680-5B9F-B890-38789B52EB50
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
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
