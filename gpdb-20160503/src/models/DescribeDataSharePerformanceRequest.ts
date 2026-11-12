// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSharePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
   * 
   * @example
   * 2022-08-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the performance metric. Separate multiple metrics with commas (,). Valid values:
   * 
   * - **adbpg_datashare_topic_count**: the number of shared topics.
   * - **adbpg_datashare_data_size_mb**: the data volume of data sharing.
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
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

