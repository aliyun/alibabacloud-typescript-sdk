// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableMetricsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the Enhanced Monitoring metric.
   * 
   * @example
   * OS CPU utilization, equal to the number of OS-consumed CPUs divided by the total number of CPUs
   */
  description?: string;
  /**
   * @remarks
   * The category of the Enhanced Monitoring metric. Valid values:
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
   * The key of the group to which the Enhanced Monitoring metric belongs.
   * 
   * @example
   * os.cpu_usage
   */
  groupKey?: string;
  /**
   * @remarks
   * The name of the group to which the Enhanced Monitoring metric belongs.
   * 
   * @example
   * CPU Utilization Rate
   */
  groupKeyType?: string;
  /**
   * @remarks
   * The method that is used to aggregate the monitoring data of the Enhanced Monitoring metric. Valid values:
   * 
   * *   **avg**: The system calculates the average value of the Enhanced Monitoring metric.
   * *   **min**: The system calculates the minimum value of the Enhanced Monitoring metric.
   * *   **max**: The system calculates the maximum value of the Enhanced Monitoring metric.
   * 
   * @example
   * avg
   */
  method?: string;
  /**
   * @remarks
   * The key of the Enhanced Monitoring metric.
   * 
   * @example
   * os.cpu_usage.sys.avg
   */
  metricsKey?: string;
  /**
   * @remarks
   * The alias of the Enhanced Monitoring metric.
   * 
   * @example
   * cpu_sys_per_core
   */
  metricsKeyAlias?: string;
  /**
   * @remarks
   * The serial number of the Enhanced Monitoring metric.
   * 
   * @example
   * 1
   */
  sortRule?: number;
  /**
   * @remarks
   * The unit of the Enhanced Monitoring metric.
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

