// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance extends $dara.Model {
  /**
   * @remarks
   * The performance bottleneck type.
   * 
   * @example
   * ecs or disk
   */
  bottleneck?: string;
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * adbpg_status,adbpg_disk_status,adbpg_connection_status,adbgp_segment_disk_usage_percent_max,adbpg_master_disk_usage_percent_max,adbpg_disk_usage_percent
   */
  key?: string;
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The value of the performance metric.
   * 
   * @example
   * 90
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bottleneck: 'Bottleneck',
      key: 'Key',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottleneck: 'string',
      key: 'string',
      unit: 'string',
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

