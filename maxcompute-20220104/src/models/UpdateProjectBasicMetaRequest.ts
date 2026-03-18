// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectBasicMetaRequestPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. The key supports algorithms such as AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable data encryption for the project. For more information about data encryption, see
   * <props="intl">[Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key used for data encryption. This can be the default MaxCompute key or a Bring-Your-Own-Key (BYOK). The default MaxCompute key is created within MaxCompute.
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
   * 
   * - **mandatory**: The Lifecycle clause is required. You must set a lifecycle for the table.
   * 
   * - **optional**: The Lifecycle clause is optional when you create a table. If you do not set a lifecycle for the table, the table never expires.
   * 
   * - **inherit**: If you do not set a lifecycle for the table when you create it, the lifecycle of the table is the value of odps.table.lifecycle.value.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The lifecycle of the table in days. The value must be an integer from 1 to 37231. The default value is 37231.
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
   * Specifies whether to allow full table scans in the project. A full table scan consumes a large amount of resources. To improve processing efficiency, this feature is disabled by default.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Decimal data type of MaxCompute V2.0 for the project.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Specifies whether to enable resource group-based routing for Data Transmission Service.
   * 
   * - true: Data transmission tasks submitted in the project use the attached Data Transmission Service resource group by default.
   * 
   * - false: Data transmission tasks submitted in the project use the shared Data Transmission Service resource group by default.
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
   * The number of days to retain backup data. During this period, you can restore the current version to any backup version.
   * The value must be an integer from 0 to 30. The default value is 1. A value of 0 disables the backup feature.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum consumption threshold for a single SQL job.
   * Unit: Scanned data (GB) × Complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The lifecycle properties of the table.
   */
  tableLifecycle?: UpdateProjectBasicMetaRequestPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone of the project. This is the `odps.sql.timezone` property.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="intl">[Data Transmission Service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group attached to the project.
   * 
   * - Default (shared Data Transmission Service resource group): The project is not allowed to use a subscription Data Transmission Service resource group. Regardless of the value of the default Data Transmission Service resource group, data transmission tasks submitted in the project automatically use the Default resource group.
   * 
   * - Subscription Data Transmission Service resource group: The project is allowed to use a subscription Data Transmission Service resource group.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * - **1**: Edition 1.0
   * 
   * - **2**: Edition 2.0
   * 
   * - **hive**: Hive-compatible edition
   * 
   * For more information about the differences between the data type editions, see <props="intl">[Data type editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
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
   * The description of the project.
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

