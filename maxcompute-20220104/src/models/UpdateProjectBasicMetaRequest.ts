// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectBasicMetaRequestPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see
   * <props="china">[Storage Encryption](https://help.aliyun.com/zh/maxcompute/security-and-compliance/storage-encryption)
   * <props="intl">[Storage Encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
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
   * default
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

export class UpdateProjectBasicMetaRequestPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * - *mandatory*: The lifecycle clause is required in a table creation statement.
   * - *optional*: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
   * - *inherit*: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.
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

export class UpdateProjectBasicMetaRequestProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a full table scan is allowed in the project. A full table scan occupies a large number of resources, which reduces data processing efficiency. By default, the full table scan feature is disabled.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
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
   * Indicates whether the routing of the Tunnel resource group is enabled.
   * 
   * - true: The data transfer tasks that are submitted by the project by default use the Tunnel resource group that is bound to the project.
   * - false: The data transfer tasks that are submitted by the project by default use the Tunnel shared resource group.
   * 
   * @example
   * true
   */
  enableTunnelQuotaRoute?: boolean;
  /**
   * @remarks
   * The storage encryption properties.
   */
  encryption?: UpdateProjectBasicMetaRequestPropertiesEncryption;
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
   * The table lifecycle properties.
   */
  tableLifecycle?: UpdateProjectBasicMetaRequestPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone that is used by your project. The time zone is the same as the time zone specified by `odps.sql.timezone` .
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="china">[Data Transmission Service](https://help.aliyun.com/zh/maxcompute/user-guide/overview-of-dts)
   * <props="intl">[Data Transmission Service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * - Default resource group: The Tunnel shared resource group is used. You cannot use the subscription-based Tunnel resource group for the project. The default resource group is automatically used by the Tunnel service of your project, regardless of the parameter setting.
   * - Subscription-based Tunnel resource group: You can use the subscription-based Tunnel resource group for the project.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * - *1*: MaxCompute V1.0 data type edition
   * - *2*: MaxCompute V2.0 data type edition
   * - *hive*: Hive-compatible data type edition
   * For more information about the differences among the three data type editions, see <props="china">[Data Type Versions](https://help.aliyun.com/zh/maxcompute/user-guide/data-type-editions)
   * <props="intl">[Data Type Versions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2.0
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableDr: 'enableDr',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      enableDecimal2: 'boolean',
      enableDr: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: UpdateProjectBasicMetaRequestPropertiesEncryption,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: UpdateProjectBasicMetaRequestPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaRequest extends $dara.Model {
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
   * The basic properties of the project.
   */
  properties?: UpdateProjectBasicMetaRequestProperties;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      properties: UpdateProjectBasicMetaRequestProperties,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

