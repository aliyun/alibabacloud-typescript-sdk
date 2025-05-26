// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](~~~612397~~~) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The maximum time range that can be specified is two days.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The key of the performance metric that you want to query. Separate multiple keys with commas (,). For more information about the performance metrics, see [Metric overview](https://help.aliyun.com/document_detail/2863211.html).
   * 
   * @example
   * AnalyticDB_CPU_Usage_Percentage
   */
  key?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * user_default
   */
  resourcePools?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
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

