// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for access over the Internet or a network that is used to interconnect with other Alibaba Cloud services.
   * 
   * > If you configure only this IP address whitelist, access over the Internet or the network that is used to interconnect with other Alibaba Cloud services is restricted based on the configuration, and access over a VPC is prohibited.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP address whitelist for access over a VPC.
   * 
   * > If you configure only this IP address whitelist, access over a VPC is restricted based on the configuration, and access over the Internet or a network that is used to interconnect with other Alibaba Cloud services is prohibited.
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
   * The data encryption algorithm. Supported algorithms include AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable data encryption for the project. For more information, see <props="intl">[Storage encryption](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key used for data encryption. Valid values include MaxCompute Default Key and Bring-Your-Own-Key (BYOK). MaxCompute Default Key is a default key created within MaxCompute.
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
   * Specifies whether the project is an external project of <props="intl">[data lakehouse 2.0](https://www.alibabacloud.com/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
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
   * The long-term storage usage.
   * 
   * @example
   * 21764917
   */
  longTermSize?: number;
  /**
   * @remarks
   * The IA storage class usage.
   * 
   * @example
   * 767693
   */
  lowFrequencySize?: number;
  /**
   * @remarks
   * The Standard storage usage.
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
   * The backup storage size.
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
   * The <props="intl">[tiered storage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage) information.
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
   * - **mandatory**: The Lifecycle clause is required. You must set a lifecycle for the table.
   * 
   * - **optional**: The Lifecycle clause is optional when you create a table. If you do not set a lifecycle for the table, the table is permanently valid.
   * 
   * - **inherit**: If you do not set a lifecycle for a table when you create it, the lifecycle of the table is the value of odps.table.lifecycle.value.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days. The value can be an integer from 1 to 37231. The default value is 37231.
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
   * The number of days after the data was last accessed. After this period, the storage class is automatically changed. This corresponds to the `LastAccessTime` of the table or partition.
   * 
   * > If the LastAccessTime of the table or partition is empty:
   * >
   * > - For tables or partitions that were created before October 1, 2023, the last access time is considered 00:00:00 on October 1, 2023 (UTC+0).
   * >
   * > - For tables or partitions that were created on or after October 1, 2023, if the data has not been accessed, the creation time of the table or partition is considered the last access time.
   * 
   * @example
   * 180
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The number of days after the data was last modified. After this period, the storage class is automatically changed. This corresponds to the `LastModifiedTime` of the table or partition.
   * 
   * @example
   * 180
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The number of days after the storage class was last changed.
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
   * The number of days after the data was last accessed. After this period, the storage class is automatically changed. This corresponds to the `LastAccessTime` of the table or partition.
   * 
   * > If the LastAccessTime of the table or partition is empty:
   * >
   * > - For tables or partitions that were created before October 1, 2023, the last access time is considered 00:00:00 on October 1, 2023 (UTC+0).
   * >
   * > - For tables or partitions that were created on or after October 1, 2023, if the data has not been accessed, the creation time of the table or partition is considered the last access time.
   * 
   * @example
   * 30
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The number of days after the data was last modified. After this period, the storage class is automatically changed. This corresponds to the `LastModifiedTime` of the table or partition.
   * 
   * @example
   * 30
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The number of days after the storage class was last changed.
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
   * The identifier for the long-term storage class.
   */
  tierToLongterm?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm;
  /**
   * @remarks
   * The identifier for the IA storage class.
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
   * Specifies whether to allow a full table scan in the project. A full table scan consumes a large amount of resources and reduces processing efficiency. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  autoMvQuotaGb?: number;
  /**
   * @remarks
   * The parent resource group of the Data Transmission Service resource group that is bound to the project. This parameter is for internal use.
   * 
   * @example
   * Default_p
   */
  elderTunnelQuota?: string;
  enableAutoMv?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the DECIMAL data type of MaxCompute V2.0 for the project.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully enable external table caching.
   * 
   * @example
   * true
   */
  enableFdcCacheForce?: boolean;
  /**
   * @remarks
   * Specifies whether to enable <props="intl">[tiered storage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage).
   * 
   * @example
   * true
   */
  enableTieredStorage?: boolean;
  /**
   * @remarks
   * Specifies whether to enable routing for the Data Transmission Service resource group.
   * 
   * - true: The data transmission tasks that are submitted by default in the project use the Data Transmission Service resource group that is bound to the project.
   * 
   * - false: The data transmission tasks that are submitted by default in the project use the shared Data Transmission Service resource group.
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
   * The retention period of backup data. Unit: days. During this period, you can restore the current data version to any backup version. The value can be an integer from 0 to 30. The default value is 1. A value of 0 indicates that the backup feature is disabled.
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
   * The <props="intl">[tiered storage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierInfo?: GetProjectResponseBodyDataPropertiesStorageTierInfo;
  /**
   * @remarks
   * The lifecycle properties of the table.
   */
  tableLifecycle?: GetProjectResponseBodyDataPropertiesTableLifecycle;
  /**
   * @remarks
   * The properties of the <props="intl">[tiered storage lifecycle rule](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage#f61fc9db76nna). After you set these properties, the system automatically triggers the conversion of storage classes based on the rule.
   */
  tableLifecycleConfig?: GetProjectResponseBodyDataPropertiesTableLifecycleConfig;
  /**
   * @remarks
   * The time zone of the project. This parameter corresponds to the `odps.sql.timezone` property.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="intl">[Data Transmission Service](https://www.alibabacloud.com/help/en/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * - Default (shared Data Transmission Service resource group): The project cannot use a subscription Data Transmission Service resource group. Regardless of the value of the default Data Transmission Service resource group, the Data Transmission Service automatically uses the Default resource group for data transmission tasks that are submitted by default in the project.
   * 
   * - Subscription Data Transmission Service resource group: The project can use a subscription Data Transmission Service resource group.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * - **1**: V1.0
   * 
   * - **2**: V2.0
   * 
   * - **hive**: Hive-compatible
   * 
   * For more information, see <props="intl">[Data type editions](https://www.alibabacloud.com/help/en/maxcompute/user-guide/data-type-editions).
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
   * b7afb7d1-****-****-****-c393669c307b
   */
  resourceId?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * PayAsYouGo
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
   * If data protection is enabled for a project, you can configure an exception policy to specify exception or trusted projects. This policy allows specified users to transfer data from a specified object to a specified project. The data protection mechanism does not apply to the scenarios described in the exception policy.
   * 
   * @example
   * {
   *       "Version": "1",
   *       "Statement": [
   *             {
   *                   "Effect": "Allow",
   *                   "Principal": "",
   *                   "Action": [
   *                         "odps:[, , ...]"
   *                   ],
   *                   "Resource": "acs:odps:*:",
   *                   "Condition": {
   *                         "StringEquals": {
   *                               "odps:TaskType": [
   *                                     ""
   *                               ]
   *                         }
   *                   }
   *             }
   *       ]
   * }
   */
  exceptionPolicy?: string;
  /**
   * @remarks
   * Specifies whether to enable the <props="intl">[data protection mechanism](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/project-data-protection) for the project to prohibit or allow data to flow out of the project. By default, this mechanism is disabled.
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
   * Specifies whether to use the <props="intl">[download control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/download-control) feature. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Specifies whether to use the <props="intl">[label-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/label-based-access-control) feature. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Specifies whether the creator of an object has access permissions on the object. Default value: true.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Specifies whether the creator of an object has grant permissions on the object. Default value: true.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The properties of the <props="intl">[data protection mechanism](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/project-data-protection).
   */
  projectProtection?: GetProjectResponseBodyDataSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Specifies whether to use the <props="intl">[ACL-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/acl-based-access-control) feature. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Specifies whether to use the <props="intl">[policy-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/policy-based-access-control-1) feature. By default, this feature is enabled.
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
   * BI_Analysis
   */
  comment?: string;
  /**
   * @remarks
   * The total storage usage. This value indicates the logical storage size after data is collected and compressed for the project. The storage usage is the same as the usage for billing.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The time when the project was created.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default computing quota. Quotas are used for resource allocation. If you do not specify a computing quota, jobs that are initiated in the project consume resources from the default quota. For more information, see <props="intl">[Use of computing resources](https://www.alibabacloud.com/help/en/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The IP address whitelist.
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
   * ALIYUN$odps****@aliyunid.com
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
   * - **AVAILABLE**: Normal
   * 
   * - **READONLY**: read-only
   * 
   * - **FROZEN**: frozen
   * 
   * - **DELETING**: being deleted
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of members that are assigned the `Super_Administrator` role in the project.
   */
  superAdmins?: string[];
  /**
   * @remarks
   * Specifies whether data storage by schema is supported. MaxCompute supports schemas. A schema is an object in a project. It is used to classify objects such as tables, resources, and user-defined functions (UDFs). You can create multiple schemas in a project. For more information, see <props="intl">[Schema operations](https://www.alibabacloud.com/help/en/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * - **managed**: an internal project.
   * 
   * - **external**: an external project.
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
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: Informational response. The request is received and is being processed.
   * 
   * - 2xx: Success. The request is successfully received, understood, and accepted by the server.
   * 
   * - 3xx: Redirection. The request is redirected, and further actions are required to complete the request.
   * 
   * - 4xx: Client error. The request contains invalid request parameters or syntax, or specific request conditions cannot be met.
   * 
   * - 5xx: Server error. The server cannot fulfill the request for other reasons.
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

