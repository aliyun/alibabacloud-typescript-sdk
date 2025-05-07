// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1s1j103lo6****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The keys of the Enhanced Monitoring metrics that you want to display for the instance. You can enter a maximum of 30 metric keys. If you enter multiple metric keys, you must separate the metric keys with commas (,).
   * 
   * You can call the DescribeAvailableMetrics operation to query the keys of metrics.
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
   * The application scope of this modification. Valid values:
   * 
   * *   **instance**: This modification is applied only to the current instance.
   * *   **region**: This modification is applied to all ApsaraDB RDS for PostgreSQL instances that are equipped with the same type of storage media as the current instance in the region to which the current instance belongs. For example, if the current instance is equipped with cloud disks, this modification is applied to all ApsaraDB RDS for PostgreSQL instances that are equipped with cloud disks in the region to which the current instance belongs.
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

