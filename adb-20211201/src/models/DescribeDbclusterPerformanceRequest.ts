// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all clusters in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in UTC in the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * 
   * > The end time must be later than the start time, and the time span between the start time and the end time cannot exceed two days.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The names of the performance metrics to query, which are the keys of the monitored items. Separate multiple values with commas (,). For more information about the supported metrics, refer to [Overview of monitoring metrics](https://help.aliyun.com/document_detail/2863211.html).
   * 
   * @example
   * AnalyticDB_CPU_Usage_Percentage
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * user_default
   */
  resourcePools?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in UTC in the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * 
   * @example
   * 2022-03-10T23:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      resourcePools: 'ResourcePools',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      regionId: 'string',
      resourcePools: 'string',
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

