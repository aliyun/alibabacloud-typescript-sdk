// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for the Internet and cloud service interconnection network.
   * 
   * > If only the Internet and cloud service interconnection network IP whitelist is configured, access from the Internet and cloud service interconnection network is restricted by the configuration, and all VPC network access is prohibited.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP whitelist for VPC networks.
   * > If only the VPC network IP whitelist is configured, VPC network access is restricted by the configuration, and all access from the Internet and cloud service interconnection network is prohibited.
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
   * The data encryption algorithm. The supported encryption algorithms include AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether data encryption is enabled for the project. For more information about data encryption, see
   * <props="china">[Storage encryption](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/storage-encryption)
   * <props="intl">[Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key used for data encryption, including the default key (MaxCompute Default Key) and Bring Your Own Key (BYOK). The default key (MaxCompute Default Key) is a default key created internally by MaxCompute.
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
   * Indicates whether this is a <props="china">[Data Lakehouse Solution 2.0](https://www.alibabacloud.com/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide)
   * <props="intl">[Data Lakehouse Solution 2.0](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide) external project.
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
   * The low-frequency storage usage.
   * 
   * @example
   * 767693
   */
  lowFrequencySize?: number;
  /**
   * @remarks
   * The standard storage usage.
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
   * The <props="china">[tiered storage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage)
   * <props="intl">[tiered storage](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
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
   * - **mandatory**: The Lifecycle clause is required. You must set the lifecycle of the table.
   * - **optional**: The Lifecycle clause is optional when you create a table. If the lifecycle is not set, the table is permanently valid.
   * - **inherit**: If the lifecycle is not set when you create a table, the lifecycle of the table is the value of odps.table.lifecycle.value.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days. Valid values: 1 to 37231. Default value: 37231.
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
   * The number of days after the last access time of the data before the setting is automatically applied. This corresponds to the `LastAccessTime` of the table or partition.
   * 
   * > If the LastAccessTime of the table or partition is empty:
   * > - For tables or partitions created before October 1, 2023, the calculation defaults to 2023.10.01 00:00:00 in the UTC+0 time zone.
   * > - For tables or partitions created after October 1, 2023, if the data has not been accessed, the calculation is based on the CreateTime.
   * 
   * @example
   * 180
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The number of days after the last modification time of the data before the setting is automatically applied. This corresponds to the `LastModifiedTime` of the table or partition.
   * 
   * @example
   * 180
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The number of days since the last storage tier conversion.
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
   * The number of days after the last access time of the data before the setting is automatically applied. This corresponds to the `LastAccessTime` of the table or partition.
   * 
   * > If the LastAccessTime of the table or partition is empty:
   * > - For tables or partitions created before October 1, 2023, the calculation defaults to 2023.10.01 00:00:00 in the UTC+0 time zone.
   * > - For tables or partitions created after October 1, 2023, if the data has not been accessed, the calculation is based on the CreateTime.
   * 
   * @example
   * 30
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The number of days after the last modification time of the data before the setting is automatically applied. This corresponds to the `LastModifiedTime` of the table or partition.
   * 
   * @example
   * 30
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The number of days since the last storage tier conversion.
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
   * The long-term storage identifier.
   */
  tierToLongterm?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm;
  /**
   * @remarks
   * The low-frequency storage identifier.
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
   * Specifies whether full table scans are allowed in the project. Full table scans consume a large amount of resources. To improve processing efficiency, this feature is disabled by default.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  autoMvQuotaGb?: number;
  /**
   * @remarks
   * The parent group of the data transfer EPS resource group attached to the project. You can ignore this parameter.
   * 
   * @example
   * Default_p
   */
  elderTunnelQuota?: string;
  enableAutoMv?: boolean;
  enableDataMasking?: boolean;
  /**
   * @remarks
   * Specifies whether the Decimal data type of MaxCompute 2.0 is enabled for the project.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly enable external table caching.
   * 
   * @example
   * true
   */
  enableFdcCacheForce?: boolean;
  /**
   * @remarks
   * Specifies whether <props="china">[tiered storage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage)
   * <props="intl">[tiered storage](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) is enabled.
   * 
   * @example
   * true
   */
  enableTieredStorage?: boolean;
  /**
   * @remarks
   * Specifies whether data transfer EPS resource group routing is enabled.
   * - true: Data transfer tasks submitted by this project use the bound data transfer EPS resource group by default.
   * - false: Data transfer tasks submitted by this project use the shared data transfer EPS resource group by default.
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
   * The external project properties.
   */
  externalProjectProperties?: GetProjectResponseBodyDataPropertiesExternalProjectProperties;
  /**
   * @remarks
   * The external table cache quota.
   * 
   * @example
   * fdc_quota
   */
  fdcQuota?: string;
  /**
   * @remarks
   * The number of days that backup data is retained. During this period, you can restore the current version to any backed-up data version.
   * Valid values: 0 to 30. Default value: 1. A value of 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum threshold for a single SQL statement.
   * Unit: scan volume (GB) × complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The <props="china">[tiered storage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage)
   * <props="intl">[tiered storage](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierInfo?: GetProjectResponseBodyDataPropertiesStorageTierInfo;
  /**
   * @remarks
   * The lifecycle properties of the table.
   */
  tableLifecycle?: GetProjectResponseBodyDataPropertiesTableLifecycle;
  /**
   * @remarks
   * The <props="china">[tiered storage lifecycle rules](https://www.alibabacloud.com/help/en/maxcompute/user-guide/tiered-storage#f61fc9db76nna)
   * <props="intl">[tiered storage lifecycle rules](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage#f61fc9db76nna) properties. After configuration, the system automatically triggers storage tier conversion based on these rules.
   */
  tableLifecycleConfig?: GetProjectResponseBodyDataPropertiesTableLifecycleConfig;
  /**
   * @remarks
   * The project time zone, which is the `odps.sql.timezone` property.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="china">[data transfer service](https://www.alibabacloud.com/help/en/maxcompute/user-guide/overview-of-dts)
   * <props="intl">[data transfer service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group bound to the project.
   * 
   * - Default (shared data transfer EPS resource group): The project is not allowed to use a data transfer service (subscription) resource group. Regardless of the default data transfer EPS resource group setting, data transfer tasks submitted by this project automatically use the Default resource group.
   * 
   * - Data transfer service (subscription) resource group: The project is allowed to use a data transfer service (subscription) resource group.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type version. Valid values:
   * - **1**: version 1.0
   * - **2**: version 2.0
   * - **hive**: Hive-compatible type
   * 
   * For differences among the three data type versions, see <props="china">[Data type editions](https://www.alibabacloud.com/help/en/maxcompute/user-guide/data-type-editions)
   * <props="intl">[Data type editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
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
      enableDataMasking: 'enableDataMasking',
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
      enableDataMasking: 'boolean',
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
   * The billing type of the default computing quota.
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
   * If project data protection is enabled, you can set exceptions or trusted projects to allow specified users to export data of specified objects to specified projects. All scenarios described in the exception policy can override the data protection mechanism.
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
   * Indicates the enabling status of the <props="china">[data protection](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/project-data-protection)
   * <props="intl">[data protection](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) mechanism for the project, which prohibits or allows the data stream to flow out of the project. This is disabled by default.
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
   * Specifies whether the <props="china">[Download permission control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/download-control)
   * <props="intl">[Download permission control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. This feature is disabled by default.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Specifies whether to enable IAM permissions.
   */
  enableNamespacePrivilege?: boolean;
  /**
   * @remarks
   * Specifies whether the <props="china">[Label-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/label-based-access-control)
   * <props="intl">[Label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. This feature is disabled by default.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Specifies whether object creators are allowed to have access permissions on the objects they create. This is enabled by default.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Specifies whether object creators are allowed to have grant permissions on the objects they create. This is enabled by default.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The <props="china">[data protection](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/project-data-protection)
   * <props="intl">[data protection](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) properties.
   */
  projectProtection?: GetProjectResponseBodyDataSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Specifies whether the <props="china">[ACL-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/acl-based-access-control)
   * <props="intl">[ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control) feature is enabled. This feature is enabled by default.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Specifies whether the <props="china">[Policy-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/policy-based-access-control-1)
   * <props="intl">[Policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1) feature is enabled. This feature is enabled by default.
   * 
   * @example
   * true
   */
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      enableNamespacePrivilege: 'enableNamespacePrivilege',
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
      enableNamespacePrivilege: 'boolean',
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
   * The total storage size.
   * Views the current storage size of the project. This storage size is consistent with the metering standard, which is the logical storage size after data is collected and compressed at the project level.
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
   * The default computing quota.
   * Used for compute resource allocation. If no computing quota is specified, jobs initiated by this project consume resources from the default quota. For more information about compute resource usage, see <props="china">[Compute resources - Quota usage](https://www.alibabacloud.com/help/en/maxcompute/user-guide/use-of-computing-resources)
   * <props="intl">[Compute resources - Quota usage](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The IP whitelist.
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
   * The instance ID and billing type of the default computing quota.
   */
  saleTag?: GetProjectResponseBodyDataSaleTag;
  /**
   * @remarks
   * The security properties.
   */
  securityProperties?: GetProjectResponseBodyDataSecurityProperties;
  /**
   * @remarks
   * The project status. Valid values:
   * - **AVAILABLE**: Normal.
   * - **READONLY**: Read-only.
   * - **FROZEN**: Frozen.
   * - **DELETING**: Being deleted.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of members with the `Super_Administrator` role in the project.
   */
  superAdmins?: string[];
  /**
   * @remarks
   * Indicates whether schema-based storage is supported.
   * MaxCompute supports schemas, which are objects under a project and above tables, resources, and UDFs, used to categorize tables, resources, and UDFs. A project can contain multiple schemas. For more information, see <props="china">[Schema operations](https://www.alibabacloud.com/help/en/maxcompute/user-guide/schema-related-operations)
   * <props="intl">[Schema operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * - **managed**: Internal project.
   * - **external**: External project.
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
   * The response data.
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
   * - 1xx: Informational response - The request has been received and is being processed.
   * - 2xx: Success - The request has been successfully received, understood, and accepted by the server.
   * - 3xx: Redirection - The request has been redirected. Further action is required to complete the request.
   * - 4xx: Client error - The request contains invalid parameters, syntax errors, or specific request conditions that cannot be met.
   * - 5xx: Server error - The server cannot fulfill the request due to other reasons.
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

