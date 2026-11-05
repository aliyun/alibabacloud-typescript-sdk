import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
    slaveRegion?: string[];
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
export declare class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute extends $dara.Model {
    accountMaxQuantity?: number;
    accountType?: string;
    availabilityValue?: string;
    category?: string;
    connectionMode?: string;
    connectionString?: string;
    creationTime?: string;
    DBInstanceCPU?: string;
    DBInstanceClass?: string;
    DBInstanceClassType?: string;
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    DBInstanceMemory?: number;
    DBInstanceNetType?: string;
    DBInstanceStatus?: string;
    DBInstanceStorage?: number;
    DBInstanceStorageType?: string;
    DBInstanceType?: string;
    DBMaxQuantity?: number;
    engine?: string;
    engineVersion?: string;
    expireTime?: string;
    exportKey?: string;
    guardDBInstanceId?: string;
    incrementSourceDBInstanceId?: string;
    instanceNetworkType?: string;
    lockMode?: string;
    lockReason?: string;
    maintainTime?: string;
    masterInstanceId?: string;
    maxConnections?: number;
    maxIOPS?: number;
    payType?: string;
    port?: string;
    readDelayTime?: string;
    regionId?: string;
    securityIPList?: string;
    slaveZones?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones;
    supportUpgradeAccountType?: string;
    tags?: string;
    tempDBInstanceId?: string;
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
export declare class DescribeDBInstancesAsCsvResponseBodyItems extends $dara.Model {
    DBInstanceAttribute?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute[];
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
export declare class DescribeDBInstancesAsCsvResponseBody extends $dara.Model {
    items?: DescribeDBInstancesAsCsvResponseBodyItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A444291****
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
