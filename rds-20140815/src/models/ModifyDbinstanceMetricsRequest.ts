// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1s1j103lo6****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The monitoring metrics to configure for the instance. You can specify multiple metric keys separated by commas (,). A maximum of 30 metric keys can be specified.
   * 
   * You can call the DescribeAvailableMetrics operation to obtain the enhanced monitoring metric keys.
   * 
   * This parameter is required.
   * 
   * @example
   * os.cpu_usage.sys.avg,os.cpu_usage.user.avg
   */
  metricsConfig?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scope of the modification. Valid values:
   * * **instance**: instance level. The modification is applied only to cloud disk instance.
   * * **region**: region level. The modification is applied to all ApsaraDB RDS for PostgreSQL instances that use the same storage type as cloud disk instance in the current region. For example, if cloud disk instance uses cloud disks, the modification is applied to all ApsaraDB RDS for PostgreSQL instances with cloud disks in the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      metricsConfig: 'MetricsConfig',
      resourceOwnerId: 'ResourceOwnerId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      metricsConfig: 'string',
      resourceOwnerId: 'number',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

