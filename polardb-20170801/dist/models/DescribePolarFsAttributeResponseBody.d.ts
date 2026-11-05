import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsAttributeResponseBodyCustomBucketPathList extends $dara.Model {
    /**
     * @remarks
     * The custom storage bucket.
     *
     * @example
     * pfs-xxx.oss-[regionId]-internal.aliyuncs.com
     */
    bucket?: string;
    /**
     * @remarks
     * The custom storage path.
     *
     * @example
     * /data
     */
    path?: string;
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
export declare class DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems extends $dara.Model {
    /**
     * @remarks
     * The protocol endpoint.
     *
     * @example
     * aclsh-prd-pdb12-rw.rwlb.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The IP address.
     *
     * @example
     * 47.116.9.224
     */
    IPAddress?: string;
    /**
     * @remarks
     * The network type of the connection string. Valid values:
     * * **Public**: Public network address.
     * * **Private**: Private network address.
     * * **Inner**: Private network address (classic network).
     *
     * @example
     * Public
     */
    netType?: string;
    /**
     * @remarks
     * The port number.
     *
     * @example
     * 3306
     */
    port?: string;
    /**
     * @remarks
     * The VPC ID.
     *
     * @example
     * vpc-**********
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-**************
     */
    vSwitchId?: string;
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
export declare class DescribePolarFsAttributeResponseBodyEndpointItems extends $dara.Model {
    /**
     * @remarks
     * The list of addresses.
     */
    addressItems?: DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems[];
    /**
     * @remarks
     * The endpoint ID.
     *
     * @example
     * ep-xxxxxxxxx
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * The endpoint type, such as NAS or S3 Gateway.
     *
     * @example
     * S3Gateway
     */
    endpointType?: string;
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
export declare class DescribePolarFsAttributeResponseBodyMountInfo extends $dara.Model {
    /**
     * @remarks
     * The cluster management endpoint.
     *
     * @example
     * TCP://**.**.**.**:3000,TCP://**.**.**.**:3000,TCP://**.**.**.**:3000
     */
    polarDbProxy?: string;
    /**
     * @remarks
     * The file system name.
     *
     * @example
     * pfs-**********
     */
    polarFsCluster?: string;
    /**
     * @remarks
     * The token value.
     *
     * @example
     * a734298c391cb9ebd05e2ee85feb624
     */
    token?: string;
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
export declare class DescribePolarFsAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The acceleration type.
     *
     * @example
     * alluxio
     */
    accelerateType?: string;
    /**
     * @remarks
     * The accelerated storage space. Unit: GB.
     *
     * @example
     * 1000
     */
    acceleratedStorageSpace?: number;
    /**
     * @remarks
     * Indicates whether the acceleration cache is enabled. Valid values:
     * - **ON**: Enabled.
     * - **OFF**: Disabled.
     *
     * @example
     * ON
     */
    acceleratingEnable?: string;
    /**
     * @remarks
     * The list of authorized RAM role ARNs, separated by commas.
     *
     * @example
     * arn:sts::123456:assumed-role/myrole/*
     */
    authorizedUserArnIds?: string;
    /**
     * @remarks
     * The list of authorized UIDs, separated by commas.
     *
     * @example
     * 1234567890,9876543210
     */
    authorizedUserIds?: string;
    /**
     * @remarks
     * The bandwidth. Unit: MB/s.
     *
     * @example
     * 100
     */
    bandwidth?: number;
    /**
     * @remarks
     * The bandwidth baseline. Unit: MB/s/TiB.
     *
     * @example
     * 100
     */
    bandwidthBaseLine?: number;
    /**
     * @remarks
     * The bucket ID.
     *
     * @example
     * xxx
     */
    bucketId?: string;
    /**
     * @remarks
     * The Polarlakebase edition. Valid values:
     *
     * - **high_performance**: High-performance Edition.
     *
     * - **basic**: Basic Edition.
     *
     * - **cold**: Cold Storage Edition.
     *
     * @example
     * high_performance
     */
    category?: string;
    /**
     * @remarks
     * The client download URL.
     *
     * @example
     * oss://*
     */
    clientDownloadPath?: string;
    /**
     * @remarks
     * The creation time.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2021-08-02T05:57:10Z
     */
    createTime?: string;
    /**
     * @remarks
     * The custom bucket path.
     *
     * @example
     * xxxxxx-%d.oss-cn-beijing-internal.aliyuncs.com
     */
    customBucketPath?: string;
    /**
     * @remarks
     * The list of custom storage paths.
     */
    customBucketPathList?: DescribePolarFsAttributeResponseBodyCustomBucketPathList[];
    /**
     * @remarks
     * The endpoint ID.
     *
     * @example
     * pe-zo1z5qw5nb39s699n
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * The database ecosystem type. Valid values:
     * * **MySQL**
     * * **PostgreSQL**
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The list of endpoints, including endpoint information for types such as NAS and S3 Gateway.
     */
    endpointItems?: DescribePolarFsAttributeResponseBodyEndpointItems[];
    /**
     * @remarks
     * The expiration time of the cluster.
     *
     * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription). For clusters whose billing method is **Postpaid** (pay-as-you-go), an empty value is returned.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-10-10T16:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * Indicates whether the cluster has expired.
     * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription).
     *
     * @example
     * false
     */
    expired?: string;
    /**
     * @remarks
     * The file system ID.
     *
     * @example
     * xxx
     */
    fileSystemId?: string;
    /**
     * @remarks
     * The lock mode. Valid values:
     *
     * - **Unlock**: Unlocked.
     * - **ManualLock**: Manually locked.
     * - **LockByExpiration**: Automatically locked due to cluster expiration.
     *
     * @example
     * Unlock
     */
    lockMode?: string;
    /**
     * @remarks
     * The proxy endpoint ID.
     *
     * @example
     * pe-cz9inwqec7ifd98c3
     */
    maxscaleEndpointId?: string;
    /**
     * @remarks
     * The metadata service cluster endpoint.
     *
     * @example
     * pc-x67w12d2d5t13mt88.pg.polardb.rds.aliyuncs.com
     */
    metaConnString?: string;
    /**
     * @remarks
     * The metadata instance name.
     *
     * @example
     * pc-xxxxxxxxxxxxxxxxx
     */
    metaInstanceName?: string;
    /**
     * @remarks
     * The metadata proxy service cluster endpoint.
     *
     * @example
     * pc-y3610mp168p3bb740.rwlb.rds.aliyuncs.com
     */
    metaMxsConnString?: string;
    /**
     * @remarks
     * The metadata address for FUSE mounting (encrypted).
     *
     * @example
     * e6cc1d2e2a6fa292038d999fda6501*****
     */
    metaUrl?: string;
    /**
     * @remarks
     * The minor version number of the instance.
     *
     * @example
     * v1.3.0-v1.1.1
     */
    minorVersion?: string;
    /**
     * @remarks
     * The mount configuration.
     */
    mountInfo?: DescribePolarFsAttributeResponseBodyMountInfo;
    /**
     * @remarks
     * The billing method. Valid values:
     *
     * - **Postpaid**: Pay-as-you-go.
     * - **Prepaid**: Subscription.
     *
     * @example
     * Prepaid
     */
    payType?: string;
    /**
     * @remarks
     * The Polarlakebase instance description.
     *
     * @example
     * pfs-xxx
     */
    polarFsInstanceDescription?: string;
    /**
     * @remarks
     * The Polarlakebase instance ID.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The Polarlakebase instance status.
     *
     * @example
     * Running
     */
    polarFsStatus?: string;
    /**
     * @remarks
     * The instance version. Valid values:
     * - **PolarFS 2.0**: 2.0.
     * - **PolarFS 1.0**: 1.0.
     *
     * @example
     * PolarFS 2.0
     */
    polarFsType?: string;
    /**
     * @remarks
     * The version.
     *
     * @example
     * 1.0.1-1.0.3
     */
    polarFsVersion?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the associated PolarDB cluster.
     *
     * @example
     * pc-2zejpr41d9xk3uk34
     */
    relativeDbClusterId?: string;
    /**
     * @remarks
     * The associated Polarlakebase instance ID.
     *
     * @example
     * pfs-**********
     */
    relativePfsClusterId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3F9E6A3B-C13E-4064-A010-18582A******
     */
    requestId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-xxx
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The managed security group ID.
     *
     * @example
     * sg-bp**************
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The storage space. Unit: GB.
     *
     * @example
     * 1000
     */
    storageSpace?: number;
    /**
     * @remarks
     * The storage type.
     * For High-performance Edition, valid values are:
     * * **ESSDPL1**
     * * **ESSDPL0**
     *
     * For Basic Edition, valid values are:
     * * **city_redundancy**: Zone-redundant storage.
     *
     * @example
     * essdpl1
     */
    storageType?: string;
    /**
     * @remarks
     * The used storage space. Unit: bytes.
     *
     * @example
     * 3012558848
     */
    storageUsed?: number;
    /**
     * @remarks
     * The default user account name for S3 Gateway.
     *
     * @example
     * lakebase_acc
     */
    userDefaultAccName?: string;
    /**
     * @remarks
     * The default user account secret key for S3 Gateway (encrypted ciphertext).
     *
     * @example
     * EncryptedSecretKey==
     */
    userDefaultAccSk?: string;
    /**
     * @remarks
     * The VPC ID.
     *
     * @example
     * vpc-**********
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-**************
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The zone ID of the vSwitch.
     *
     * @example
     * cn-beijing-k
     */
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
