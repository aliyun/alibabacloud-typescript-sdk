// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsResponseBodyDataProjectsPropertiesEncryption } from "./ListProjectsResponseBodyDataProjectsPropertiesEncryption";
import { ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties } from "./ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties";
import { ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle } from "./ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle";


export class ListProjectsResponseBodyDataProjectsProperties extends $dara.Model {
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
  encryption?: ListProjectsResponseBodyDataProjectsPropertiesEncryption;
  /**
   * @remarks
   * The properties of the external project.
   */
  externalProjectProperties?: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties;
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
  tableLifecycle?: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle;
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
   * quota_tunnel
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
   * 2
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      externalProjectProperties: 'externalProjectProperties',
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
      enableTunnelQuotaRoute: 'boolean',
      encryption: ListProjectsResponseBodyDataProjectsPropertiesEncryption,
      externalProjectProperties: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle,
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
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

