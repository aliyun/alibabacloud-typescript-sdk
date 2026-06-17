// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSharePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The time must be later than the start time, in UTC, and in the *&#x79;**\\*\\*\\*\\***&#x64;*&#x54;*HH:mm*Z format.
   * 
   * @example
   * 2022-08-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the performance metric. To specify multiple metrics, separate the metric names with a comma (,). Valid values:
   * 
   * - **adbpg_datashare_topic_count**: the number of shared topics.
   * 
   * - **adbpg_datashare_data_size_mb**: the size of shared data in MB.
   * 
   * This parameter is required.
   * 
   * @example
   * adbpg_datashare_topic_count
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start of the time range to query. The time must be in UTC and in the *yyyy-MM-dd*T*HH:mm*Z format.
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

