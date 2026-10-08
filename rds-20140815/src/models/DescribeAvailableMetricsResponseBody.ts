// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableMetricsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the enhanced monitoring metric.
   * 
   * @example
   * sys cpu usage, sys cpu usage / total cpu
   */
  description?: string;
  /**
   * @remarks
   * The category of the enhanced monitoring metric. Valid values:
   * - **os**: operating system metric.
   * - **db**: database metric.
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
   * CPU Usage
   */
  groupKeyType?: string;
  /**
   * @remarks
   * The statistical method of the enhanced monitoring metric. Valid values:
   * - **avg**: average value.
   * - **min**: minimum value.
   * - **max**: maximum value.
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
   * cpu_sys_per_core
   */
  metricsKeyAlias?: string;
  /**
   * @remarks
   * The sequence number of the enhanced monitoring metric.
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

export class DescribeAvailableMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The list of enhanced monitoring metrics.
   */
  items?: DescribeAvailableMetricsResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CD61041-35F7-10F7-BE94-33A48B221218
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of enhanced monitoring metrics supported by the instance.
   * 
   * @example
   * 4
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
      items: { 'type': 'array', 'itemType': DescribeAvailableMetricsResponseBodyItems },
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

