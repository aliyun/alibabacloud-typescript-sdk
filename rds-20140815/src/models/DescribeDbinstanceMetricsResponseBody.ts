// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceMetricsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the enhanced monitoring metric.
   * 
   * @example
   * OS CPU utilization, equal to the number of OS-consumed CPUs divided by the total number of CPUs
   */
  description?: string;
  /**
   * @remarks
   * The category of the enhanced monitoring metric. Valid values:
   * 
   * *   **os**: OS metric
   * *   **db**: database metric
   * 
   * @example
   * os
   */
  dimension?: string;
  /**
   * @remarks
   * The key of the group to which the enhanced monitoring metric belongs.
   * 
   * @example
   * os.cpu_usage
   */
  groupKey?: string;
  /**
   * @remarks
   * The name of the group to which the enhanced monitoring metric belongs.
   * 
   * @example
   * CPU Utilization Rate
   */
  groupKeyType?: string;
  /**
   * @remarks
   * The method that is used to aggregate the monitoring data of the enhanced monitoring metric. Valid values:
   * 
   * *   **avg**: The system calculates the average value of the enhanced monitoring metric.
   * *   **min**: The system calculates the minimum value of the enhanced monitoring metric.
   * *   **max**: The system calculates the maximum value of the enhanced monitoring metric.
   * 
   * @example
   * avg
   */
  method?: string;
  /**
   * @remarks
   * The key of the enhanced monitoring metric.
   * 
   * @example
   * os.cpu_usage.sys.avg
   */
  metricsKey?: string;
  /**
   * @remarks
   * The alias of the enhanced monitoring metric.
   * 
   * @example
   * os.cpu_usage.sys
   */
  metricsKeyAlias?: string;
  /**
   * @remarks
   * The serial number of the enhanced monitoring metric.
   * 
   * @example
   * 1
   */
  sortRule?: number;
  /**
   * @remarks
   * The unit of the enhanced monitoring metric.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dimension: 'Dimension',
      groupKey: 'GroupKey',
      groupKeyType: 'GroupKeyType',
      method: 'Method',
      metricsKey: 'MetricsKey',
      metricsKeyAlias: 'MetricsKeyAlias',
      sortRule: 'SortRule',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimension: 'string',
      groupKey: 'string',
      groupKeyType: 'string',
      method: 'string',
      metricsKey: 'string',
      metricsKeyAlias: 'string',
      sortRule: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1*****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * An array consisting of the Enhanced Monitoring metrics that are enabled for the instance.
   */
  items?: DescribeDBInstanceMetricsResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 318C3754-F6D0-54BB-A55C-23EAA04708B7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of enhanced monitoring metrics that are enabled for the instance.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      items: { 'type': 'array', 'itemType': DescribeDBInstanceMetricsResponseBodyItems },
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

