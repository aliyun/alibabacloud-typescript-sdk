import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
    DBInstanceId?: string;
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
export declare class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
    readOnlyDBInstanceId?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
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
export declare class DescribeDBInstancesForCloneResponseBodyItemsDBInstance extends $dara.Model {
    category?: string;
    connectionMode?: string;
    createTime?: string;
    DBInstanceClass?: string;
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    DBInstanceNetType?: string;
    DBInstanceStatus?: string;
    DBInstanceStorageType?: string;
    DBInstanceType?: string;
    destroyTime?: string;
    engine?: string;
    engineVersion?: string;
    expireTime?: string;
    guardDBInstanceId?: string;
    insId?: number;
    instanceNetworkType?: string;
    lockMode?: string;
    lockReason?: string;
    masterInstanceId?: string;
    mutriORsignle?: boolean;
    payType?: string;
    readOnlyDBInstanceIds?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
    regionId?: string;
    replicateId?: string;
    resourceGroupId?: string;
    tempDBInstanceId?: string;
    vSwitchId?: string;
    vpcCloudInstanceId?: string;
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
export declare class DescribeDBInstancesForCloneResponseBodyItems extends $dara.Model {
    DBInstance?: DescribeDBInstancesForCloneResponseBodyItemsDBInstance[];
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
export declare class DescribeDBInstancesForCloneResponseBody extends $dara.Model {
    items?: DescribeDBInstancesForCloneResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 12
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of instances on the current page.
     *
     * @example
     * 10
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 120
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
