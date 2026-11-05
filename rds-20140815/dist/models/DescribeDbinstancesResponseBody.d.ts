import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
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
export declare class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
    readOnlyDBInstanceId?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
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
export declare class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
    autoRenewal?: boolean;
    blueGreenDeploymentName?: string;
    blueInstanceName?: string;
    bpeEnabled?: string;
    burstingEnabled?: boolean;
    category?: string;
    coldDataEnabled?: boolean;
    connectionMode?: string;
    connectionString?: string;
    createTime?: string;
    DBInstanceCPU?: string;
    DBInstanceClass?: string;
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    DBInstanceMemory?: number;
    DBInstanceNetType?: string;
    DBInstanceStatus?: string;
    DBInstanceStorageType?: string;
    DBInstanceType?: string;
    dedicatedHostGroupId?: string;
    dedicatedHostGroupName?: string;
    dedicatedHostIdForLog?: string;
    dedicatedHostIdForMaster?: string;
    dedicatedHostIdForSlave?: string;
    dedicatedHostNameForLog?: string;
    dedicatedHostNameForMaster?: string;
    dedicatedHostNameForSlave?: string;
    dedicatedHostZoneIdForLog?: string;
    dedicatedHostZoneIdForMaster?: string;
    dedicatedHostZoneIdForSlave?: string;
    deletionProtection?: boolean;
    destroyTime?: string;
    engine?: string;
    engineVersion?: string;
    expireTime?: string;
    generalGroupName?: string;
    greenInstanceName?: string;
    guardDBInstanceId?: string;
    instanceNetworkType?: string;
    ioAccelerationEnabled?: string;
    isAnalyticIns?: string;
    isAnalyticReadOnlyIns?: boolean;
    lockMode?: string;
    lockReason?: string;
    masterInstanceId?: string;
    mutriORsignle?: boolean;
    payType?: string;
    readOnlyDBInstanceIds?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
    regionId?: string;
    resourceGroupId?: string;
    switchWeight?: number;
    tempDBInstanceId?: string;
    tips?: string;
    tipsLevel?: number;
    vSwitchId?: string;
    vpcCloudInstanceId?: string;
    vpcId?: string;
    vpcName?: string;
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
     * The pagination token. If the response is paginated, you can pass this value to the **NextToken** parameter in the next call to retrieve the next page.
     *
     * @example
     * o7PORW5o2TJg****
     */
    nextToken?: string;
    /**
     * @remarks
     * The page number.
     *
     * > If you specify the **MaxResults** or **NextToken** parameter, this parameter returns only **1** and can be ignored.
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
     * 10
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * > If you specify the **MaxResults** or **NextToken** parameter, this parameter returns only the number of records on the current page and can be ignored.
     *
     * @example
     * 100
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
