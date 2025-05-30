// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectResponseBodyDataPropertiesEncryption } from "./GetProjectResponseBodyDataPropertiesEncryption";
import { GetProjectResponseBodyDataPropertiesExternalProjectProperties } from "./GetProjectResponseBodyDataPropertiesExternalProjectProperties";
import { GetProjectResponseBodyDataPropertiesStorageTierInfo } from "./GetProjectResponseBodyDataPropertiesStorageTierInfo";
import { GetProjectResponseBodyDataPropertiesTableLifecycle } from "./GetProjectResponseBodyDataPropertiesTableLifecycle";
import { GetProjectResponseBodyDataPropertiesTableLifecycleConfig } from "./GetProjectResponseBodyDataPropertiesTableLifecycleConfig";


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

