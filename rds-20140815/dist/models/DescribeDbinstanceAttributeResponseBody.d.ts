import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig extends $dara.Model {
    babelfishEnabled?: string;
    migrationMode?: string;
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode extends $dara.Model {
    classCode?: string;
    classType?: string;
    cpu?: string;
    disasterRecoveryNode?: boolean;
    memory?: string;
    nodeId?: string;
    nodeRegionId?: string;
    nodeRole?: string;
    nodeZoneId?: string;
    status?: string;
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes extends $dara.Model {
    DBClusterNode?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode[];
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo extends $dara.Model {
    insName?: string;
    region?: string;
    unitCode?: string;
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds extends $dara.Model {
    DBInstanceId?: string[];
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra extends $dara.Model {
    accountSecurityPolicy?: string;
    DBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds;
    recoveryModel?: string;
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds extends $dara.Model {
    readOnlyDBInstanceId?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig extends $dara.Model {
    autoPause?: boolean;
    scaleMax?: number;
    scaleMin?: number;
    switchForce?: boolean;
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone extends $dara.Model {
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
    slaveZone?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone[];
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo extends $dara.Model {
    insName?: string;
    region?: string;
    unitCode?: string;
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
export declare class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $dara.Model {
    accountMaxQuantity?: number;
    advancedFeatures?: string;
    autoUpgradeMinorVersion?: string;
    availabilityValue?: string;
    babelfishConfig?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig;
    blueGreenDeploymentName?: string;
    blueInstanceName?: string;
    bpeEnabled?: string;
    burstingEnabled?: boolean;
    canTempUpgrade?: boolean;
    category?: string;
    coldDataEnabled?: boolean;
    collation?: string;
    compressionMode?: string;
    compressionRatio?: string;
    computeBurstEnabled?: boolean;
    connectionMode?: string;
    connectionString?: string;
    consoleVersion?: string;
    creationTime?: string;
    currentKernelVersion?: string;
    DBClusterNodes?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes;
    DBInstanceCPU?: string;
    DBInstanceClass?: string;
    DBInstanceClassType?: string;
    DBInstanceDescription?: string;
    DBInstanceDiskUsed?: string;
    DBInstanceId?: string;
    DBInstanceMemory?: number;
    DBInstanceNetType?: string;
    DBInstanceStatus?: string;
    DBInstanceStorage?: number;
    DBInstanceStorageType?: string;
    DBInstanceType?: string;
    DBMaxQuantity?: number;
    dedicatedHostGroupId?: string;
    deletionProtection?: boolean;
    disasterRecoveryInfo?: string;
    disasterRecoveryInstances?: string;
    drReplicaInfo?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDrReplicaInfo;
    engine?: string;
    engineVersion?: string;
    expireTime?: string;
    extra?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra;
    generalGroupName?: string;
    greenInstanceName?: string;
    guardDBInstanceId?: string;
    IPType?: string;
    incrementSourceDBInstanceId?: string;
    instanceNetworkType?: string;
    instructionSetArch?: string;
    ioAccelerationEnabled?: string;
    isAnalyticIns?: boolean;
    isAnalyticReadOnlyIns?: boolean;
    latestKernelVersion?: string;
    lockMode?: string;
    lockReason?: string;
    maintainTime?: string;
    masterInstanceId?: string;
    masterZone?: string;
    maxConnections?: number;
    maxIOMBPS?: number;
    maxIOPS?: number;
    multipleTempUpgrade?: boolean;
    nodePerformance?: string;
    optimizedWritesInfo?: string;
    PGBouncerEnabled?: string;
    payType?: string;
    port?: string;
    proxyType?: number;
    readOnlyDBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds;
    readOnlyStatus?: string;
    readonlyInstanceSQLDelayedTime?: string;
    regionId?: string;
    resourceGroupId?: string;
    securityIPList?: string;
    securityIPMode?: string;
    serverlessConfig?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig;
    slaveZones?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones;
    superPermissionMode?: string;
    supportCompression?: boolean;
    tempDBInstanceId?: string;
    tempUpgradeTimeEnd?: string;
    tempUpgradeTimeStart?: string;
    timeZone?: string;
    tips?: string;
    tipsLevel?: number;
    vSwitchId?: string;
    /**
     * @example
     * ON
     */
    vectorSupportStatus?: string;
    vpcCloudInstanceId?: string;
    vpcId?: string;
    warmStandbyInfo?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeWarmStandbyInfo;
    zoneId?: string;
    kindCode?: string;
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
export declare class DescribeDBInstanceAttributeResponseBodyItems extends $dara.Model {
    DBInstanceAttribute?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute[];
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
export declare class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
    items?: DescribeDBInstanceAttributeResponseBodyItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
