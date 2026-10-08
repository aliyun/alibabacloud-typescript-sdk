// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceMetricsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the enhanced monitoring metric.
   * 
   * @example
   * sys cpu使用率，sys cpu使用量 / cpu总量
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
   * CPU使用率
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
   * os.cpu_usage.sys
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

export class DescribeDBInstanceMetricsResponseBody extends $dara.Model {
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
   * The list of enhanced monitoring metrics that are enabled for the instance.
   */
  items?: DescribeDBInstanceMetricsResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
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

