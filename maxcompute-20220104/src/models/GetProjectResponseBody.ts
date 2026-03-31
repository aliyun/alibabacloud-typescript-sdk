// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services.
   * 
   * >  If you configure only the IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services, the access over the Internet or the network for interconnecting with other Alibaba Cloud services is subject to configurations, and access over a virtual private cloud (VPC) is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP address whitelist for access over a VPC.
   * 
   * >  If you configure only the IP address whitelist for access over a VPC, the access over a VPC is subject to configurations, and the access over the Internet or the network for interconnecting with other Alibaba Cloud services is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.
   * 
   * @example
   * SHA1
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see
   * 
   * [Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key that is used for data encryption. You can select MaxCompute Default Key or Bring Your Own Key (BYOK) as the key type. If you select MaxCompute Default Key, the default key that is created by MaxCompute is used.
   * 
   * @example
   * dafault
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesExternalProjectProperties extends $dara.Model {
  externalCatalogId?: string;
  foreignServerName?: string;
  foreignServerType?: string;
  /**
   * @remarks
   * Indicates whether the external project is an external project for [data lakehouse solution 2.0](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
   * 
   * @example
   * true
   */
  isExternalCatalogBound?: string;
  tableFormat?: string;
  warehouse?: string;
  static names(): { [key: string]: string } {
    return {
      externalCatalogId: 'externalCatalogId',
      foreignServerName: 'foreignServerName',
      foreignServerType: 'foreignServerType',
      isExternalCatalogBound: 'isExternalCatalogBound',
      tableFormat: 'tableFormat',
      warehouse: 'warehouse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalCatalogId: 'string',
      foreignServerName: 'string',
      foreignServerType: 'string',
      isExternalCatalogBound: 'string',
      tableFormat: 'string',
      warehouse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize extends $dara.Model {
  /**
   * @remarks
   * The storage usage at the long-term storage tier.
   * 
   * @example
   * 21764917
   */
  longTermSize?: number;
  /**
   * @remarks
   * The storage usage at the Infrequent Access (IA) layer.
   * 
   * @example
   * 767693
   */
  lowFrequencySize?: number;
  /**
   * @remarks
   * The storage usage at the standard storage tier.
   * 
   * @example
   * 27649172
   */
  standardSize?: number;
  static names(): { [key: string]: string } {
    return {
      longTermSize: 'longTermSize',
      lowFrequencySize: 'lowFrequencySize',
      standardSize: 'standardSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTermSize: 'number',
      lowFrequencySize: 'number',
      standardSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesStorageTierInfo extends $dara.Model {
  /**
   * @remarks
   * The backup storage usage.
   * 
   * @example
   * 86672917
   */
  projectBackupSize?: number;
  /**
   * @remarks
   * The total storage usage.
   * 
   * @example
   * 56066037
   */
  projectTotalSize?: number;
  /**
   * @remarks
   * The [storage tier](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierSize?: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize;
  static names(): { [key: string]: string } {
    return {
      projectBackupSize: 'projectBackupSize',
      projectTotalSize: 'projectTotalSize',
      storageTierSize: 'storageTierSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBackupSize: 'number',
      projectTotalSize: 'number',
      storageTierSize: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize,
    };
  }

  validate() {
    if(this.storageTierSize && typeof (this.storageTierSize as any).validate === 'function') {
      (this.storageTierSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * 
   * *   **mandatory**: The lifecycle clause is required in a table creation statement.
   * *   **optional**: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
   * *   **inherit**: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The table lifecycle. Unit: days. Valid values: 1 to 37231. Default value: 37231.
   * 
   * @example
   * 37231
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm extends $dara.Model {
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last access time of data. N is specified by this parameter and corresponds to `LastAccessTime` that is configured for the table or partition.
   * 
   * >  If LastAccessTime of a table or partition is left empty, the following rules are applied:
   * 
   * *   For tables or partitions that you created before October 1, 2023, 2023.10.01 00:00:00 in UTC+0 is considered as the last access time.
   * 
   * *   For tables or partitions that you created on or after October 1, 2023, if no data is accessed, the table or partition creation time is considered as the last access time.
   * 
   * @example
   * 180
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last modification time of data. N is specified by this parameter and corresponds to `LastModifiedTime` that is configured for the table or partition.
   * 
   * @example
   * 180
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The period after the previous storage tier change time.
   * 
   * @example
   * 1
   */
  daysAfterLastTierModificationGreaterThan?: number;
  static names(): { [key: string]: string } {
    return {
      daysAfterLastAccessGreaterThan: 'DaysAfterLastAccessGreaterThan',
      daysAfterLastModificationGreaterThan: 'DaysAfterLastModificationGreaterThan',
      daysAfterLastTierModificationGreaterThan: 'DaysAfterLastTierModificationGreaterThan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysAfterLastAccessGreaterThan: 'number',
      daysAfterLastModificationGreaterThan: 'number',
      daysAfterLastTierModificationGreaterThan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency extends $dara.Model {
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last access time of data. N is specified by this parameter and corresponds to `LastAccessTime` that is configured for the table or partition.
   * 
   * >  If LastAccessTime of a table or partition is left empty, the following rules are applied:
   * 
   * *   For tables or partitions that you created before October 1, 2023, 2023.10.01 00:00:00 in UTC+0 is considered as the last access time.
   * 
   * *   For tables or partitions that you created on or after October 1, 2023, if no data is accessed, the table or partition creation time is considered as the last access time.
   * 
   * @example
   * 30
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last modification time of data. N is specified by this parameter and corresponds to `LastModifiedTime` that is configured for the table or partition.
   * 
   * @example
   * 30
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The period after the previous storage tier change time.
   * 
   * @example
   * 1
   */
  daysAfterLastTierModificationGreaterThan?: number;
  static names(): { [key: string]: string } {
    return {
      daysAfterLastAccessGreaterThan: 'DaysAfterLastAccessGreaterThan',
      daysAfterLastModificationGreaterThan: 'DaysAfterLastModificationGreaterThan',
      daysAfterLastTierModificationGreaterThan: 'DaysAfterLastTierModificationGreaterThan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysAfterLastAccessGreaterThan: 'number',
      daysAfterLastModificationGreaterThan: 'number',
      daysAfterLastTierModificationGreaterThan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycleConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the long-term storage tier.
   */
  tierToLongterm?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm;
  /**
   * @remarks
   * The information about the IA storage tier.
   */
  tierToLowFrequency?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency;
  static names(): { [key: string]: string } {
    return {
      tierToLongterm: 'TierToLongterm',
      tierToLowFrequency: 'TierToLowFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tierToLongterm: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm,
      tierToLowFrequency: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency,
    };
  }

  validate() {
    if(this.tierToLongterm && typeof (this.tierToLongterm as any).validate === 'function') {
      (this.tierToLongterm as any).validate();
    }
    if(this.tierToLowFrequency && typeof (this.tierToLowFrequency as any).validate === 'function') {
      (this.tierToLowFrequency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a full table scan is allowed in the project. A full table scan occupies a large number of resources, which reduces data processing efficiency. By default, the full table scan feature is disabled.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  autoMvQuotaGb?: number;
  /**
   * @remarks
   * The Tunnel parent resource group that is bound to the project. You do not need to pay attention to this group.
   * 
   * @example
   * No value
   */
  elderTunnelQuota?: string;
  enableAutoMv?: boolean;
  /**
   * @remarks
   * Indicates whether the DECIMAL type of the MaxCompute V2.0 data type edition is enabled.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Indicates whether external table caching is forcefully enabled.
   * 
   * @example
   * true
   */
  enableFdcCacheForce?: boolean;
  /**
   * @remarks
   * Indicates whether [tiered storage](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) is enabled.
   * 
   * @example
   * true
   */
  enableTieredStorage?: boolean;
  /**
   * @remarks
   * Indicates whether the routing of the Tunnel resource group is enabled.
   * 
   * *   true: The data transfer tasks that are submitted by the project by default use the Tunnel resource group that is bound to the project.
   * *   false: The data transfer tasks that are submitted by the project by default use the Tunnel shared resource group.
   * 
   * @example
   * true
   */
  enableTunnelQuotaRoute?: boolean;
  /**
   * @remarks
   * The storage encryption properties.
   */
  encryption?: GetProjectResponseBodyDataPropertiesEncryption;
  /**
   * @remarks
   * The properties of the external project.
   */
  externalProjectProperties?: GetProjectResponseBodyDataPropertiesExternalProjectProperties;
  /**
   * @remarks
   * The quota for external table caching.
   * 
   * @example
   * fdc_quota
   */
  fdcQuota?: string;
  /**
   * @remarks
   * The retention period for backup data. Unit: days. During the retention period, you can restore data of the version in use to the backup data of any version. Valid values: [0,30]. Default value: 1. The value 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum consumption threshold of a single SQL statement. Formula: Amount of scanned data (GB) × Complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The [storage tier](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierInfo?: GetProjectResponseBodyDataPropertiesStorageTierInfo;
  /**
   * @remarks
   * The table lifecycle properties.
   */
  tableLifecycle?: GetProjectResponseBodyDataPropertiesTableLifecycle;
  /**
   * @remarks
   * The [properties of tiered storage lifecycle rules](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage#f61fc9db76nna). After you configure the properties, the system triggers automatic switching of storage tiers based on the rules.
   */
  tableLifecycleConfig?: GetProjectResponseBodyDataPropertiesTableLifecycleConfig;
  /**
   * @remarks
   * The time zone that is used by your project. The time zone is the same as the time zone specified by `odps.sql.timezone`.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The [Tunnel](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * *   Default resource group: The Tunnel shared resource group is used. You cannot use the subscription-based Tunnel resource group for the project. The default resource group is automatically used by the Tunnel service of your project, regardless of the parameter setting.
   * *   Subscription-based Tunnel resource group: You can use the subscription-based Tunnel resource group for the project.
   * 
   * @example
   * Quota
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * *   **1**: MaxCompute V1.0 data type edition
   * *   **2**: MaxCompute V2.0 data type edition
   * *   **hive**: Hive-compatible data type edition
   * 
   * For more information about the differences among the three data type editions, see [Data type editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2.0
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      autoMvQuotaGb: 'autoMvQuotaGb',
      elderTunnelQuota: 'elderTunnelQuota',
      enableAutoMv: 'enableAutoMv',
      enableDecimal2: 'enableDecimal2',
      enableDr: 'enableDr',
      enableFdcCacheForce: 'enableFdcCacheForce',
      enableTieredStorage: 'enableTieredStorage',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      externalProjectProperties: 'externalProjectProperties',
      fdcQuota: 'fdcQuota',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      storageTierInfo: 'storageTierInfo',
      tableLifecycle: 'tableLifecycle',
      tableLifecycleConfig: 'tableLifecycleConfig',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      autoMvQuotaGb: 'number',
      elderTunnelQuota: 'string',
      enableAutoMv: 'boolean',
      enableDecimal2: 'boolean',
      enableDr: 'boolean',
      enableFdcCacheForce: 'boolean',
      enableTieredStorage: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: GetProjectResponseBodyDataPropertiesEncryption,
      externalProjectProperties: GetProjectResponseBodyDataPropertiesExternalProjectProperties,
      fdcQuota: 'string',
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      storageTierInfo: GetProjectResponseBodyDataPropertiesStorageTierInfo,
      tableLifecycle: GetProjectResponseBodyDataPropertiesTableLifecycle,
      tableLifecycleConfig: GetProjectResponseBodyDataPropertiesTableLifecycleConfig,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.externalProjectProperties && typeof (this.externalProjectProperties as any).validate === 'function') {
      (this.externalProjectProperties as any).validate();
    }
    if(this.storageTierInfo && typeof (this.storageTierInfo as any).validate === 'function') {
      (this.storageTierInfo as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    if(this.tableLifecycleConfig && typeof (this.tableLifecycleConfig as any).validate === 'function') {
      (this.tableLifecycleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSaleTag extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the default computing quota.
   * 
   * @example
   * project_name
   */
  resourceId?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * project
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSecurityPropertiesProjectProtection extends $dara.Model {
  /**
   * @remarks
   * If you enable the project data protection mechanism, you can configure exception or trusted projects. This allows specified users to transfer data of a specified object to a specified project. The project data protection mechanism does not take effect in all the situations that are specified in the exception policy.
   * 
   * @example
   * {
   *     "Version": "1",
   *     "Statement":
   *     [{
   *         "Effect":"Allow",
   *         "Principal":"<Principal>",
   *         "Action":["odps:<Action1>[, <Action2>, ...]"],
   *         "Resource":"acs:odps:*:<Resource>",
   *         "Condition":{
   *             "StringEquals": {
   *                 "odps:TaskType":["<Tasktype>"]
   *             }
   *         }
   *     }]
   *     }
   */
  exceptionPolicy?: string;
  /**
   * @remarks
   * Indicates whether the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) is enabled for the project. This allows or denies data transfer across projects. By default, the data protection mechanism is disabled.
   * 
   * @example
   * true
   */
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSecurityProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the [download control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Indicates whether the [label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Indicates whether to allow the object creator to have the access permissions on the object. The default value is true, which indicates that the object creator has the access permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the object creator has the authorization permissions on the object. The default value is true, which indicates that the object creator has the authorization permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The properties of the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection).
   */
  projectProtection?: GetProjectResponseBodyDataSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Indicates whether the [ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Indicates whether the [policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: GetProjectResponseBodyDataSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  validate() {
    if(this.projectProtection && typeof (this.projectProtection as any).validate === 'function') {
      (this.projectProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * maxcompute project
   */
  comment?: string;
  /**
   * @remarks
   * The total storage usage. The storage space that is occupied by your project, which is the logical storage space after your project data is collected and compressed.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default computing quota that is used to allocate computing resources. If you do not specify a computing quota for your project, the jobs that are initiated by your project consume the computing resources in the default quota. For more information about how to use computing resources, see [Use quota groups for computing resources](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * quota_a
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  ipWhiteList?: GetProjectResponseBodyDataIpWhiteList;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  name?: string;
  /**
   * @remarks
   * The account information of the project owner.
   * 
   * @example
   * 1565950907343451
   */
  owner?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * PayAsYouGo
   */
  productType?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: GetProjectResponseBodyDataProperties;
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
   * The instance ID and billing method of the default computing quota.
   */
  saleTag?: GetProjectResponseBodyDataSaleTag;
  /**
   * @remarks
   * The permission properties.
   */
  securityProperties?: GetProjectResponseBodyDataSecurityProperties;
  /**
   * @remarks
   * The project status. Valid values:
   * 
   * *   **AVAILABLE**
   * *   **READONLY**
   * *   **FROZEN**
   * *   **DELETING**
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of `Super_Administrator` role members of the project.
   */
  superAdmins?: string[];
  /**
   * @remarks
   * Indicates whether data storage by schema is supported. MaxCompute supports the schema feature. This feature allows you to classify objects such as tables, resources, and user-defined functions (UDFs) in a project by schema. You can create multiple schemas in a project. For more information, see [Schema-related operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * *   **managed**: internal project
   * *   **external**: external project
   * 
   * @example
   * managed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      productType: 'productType',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      superAdmins: 'superAdmins',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: GetProjectResponseBodyDataIpWhiteList,
      name: 'string',
      owner: 'string',
      productType: 'string',
      properties: GetProjectResponseBodyDataProperties,
      regionId: 'string',
      saleTag: GetProjectResponseBodyDataSaleTag,
      securityProperties: GetProjectResponseBodyDataSecurityProperties,
      status: 'string',
      superAdmins: { 'type': 'array', 'itemType': 'string' },
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.securityProperties && typeof (this.securityProperties as any).validate === 'function') {
      (this.securityProperties as any).validate();
    }
    if(Array.isArray(this.superAdmins)) {
      $dara.Model.validateArray(this.superAdmins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetProjectResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7b316643495896551555e855b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProjectResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

