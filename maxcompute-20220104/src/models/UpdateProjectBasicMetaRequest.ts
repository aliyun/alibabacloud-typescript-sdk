// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectBasicMetaRequestPropertiesEncryption extends $dara.Model {
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
   * Specifies whether to enable data encryption for the project. For more information about data encryption, see
   * <props="china">[Storage Encryption](https://help.aliyun.com/zh/maxcompute/security-and-compliance/storage-encryption)
   * <props="intl">[Storage Encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
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
   * - **mandatory**: The Lifecycle clause is required. You must configure the lifecycle of a table.
   * - **optional**: The Lifecycle clause is optional when you create a table. If the lifecycle of a table is not configured, the table is permanently valid.
   * - **inherit**: If the lifecycle of a table is not configured when you create a table, the lifecycle of the table is set to the value of odps.table.lifecycle.value.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The lifecycle of a table. Unit: days. Valid values: 1 to 37231. Default value: 37231.
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
   * Specifies whether to allow full table scans in the project. Full table scans consume a large amount of resources. To improve processing efficiency, this feature is disabled by default.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  enableDataMasking?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Decimal data type of MaxCompute 2.0 for the project.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Specifies whether to enable resource group routing for the data transfer service.
   * - true: The data transfer tasks submitted by this project use the bound data transfer service resource group by default.
   * - false: The data transfer tasks submitted by this project use the shared data transfer service resource group by default.
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
   * The number of days to retain backup data. During this period, you can restore the current version to any backed-up data version.
   * Valid values: [0, 30]. Default value: 1. A value of 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum threshold for a single SQL statement consumption.
   * Unit: scan volume (GB) × complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The lifecycle properties of tables.
   */
  tableLifecycle?: UpdateProjectBasicMetaRequestPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone of the project, which is the `odps.sql.timezone` property.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="china">[Data Transfer Service](https://help.aliyun.com/zh/maxcompute/user-guide/overview-of-dts)
   * <props="intl">[Data Transfer Service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group bound to the project.
   * 
   * - Default (shared data transfer service resource group): The project is not allowed to use subscription-based data transfer service resource groups. Regardless of the default data transfer service resource group setting, data transfer tasks submitted by this project automatically use the Default resource group.
   * 
   * - Subscription-based data transfer service resource group: The project is allowed to use subscription-based data transfer service resource groups.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * - **1**: Edition 1.0
   * - **2**: Edition 2.0
   * - **hive**: Hive-compatible type
   * 
   * For more information about the differences among the three data type editions, see <props="china">[Data Type Editions](https://help.aliyun.com/zh/maxcompute/user-guide/data-type-editions)
   * <props="intl">[Data Type Editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2.0
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDataMasking: 'enableDataMasking',
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
      enableDataMasking: 'boolean',
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

