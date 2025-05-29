// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSharePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-08-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the performance metric. Separate multiple values with commas (,). Valid values:
   * 
   * *   **adbpg_datashare_topic_count**: the number of shared topics.
   * *   **adbpg_datashare_data_size_mb**: the amount of data shared.
   * 
   * This parameter is required.
   * 
   * @example
   * adbpg_datashare_topic_count
   */
  key?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is no longer used.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-08-03T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      key: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

