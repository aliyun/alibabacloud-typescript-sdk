// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of an enterprise edition, basic edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of a Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](~~~612397~~~) operation to query the IDs of all clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range. The time is in UTC and must be in the *yyyy-MM-ddTHH:mmZ* format.
   * 
   * > The end time must be later than the start time. The time range cannot exceed two days.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The key of the performance metric. Separate multiple keys with commas (,). For a list of supported metrics, see [metric overview](https://help.aliyun.com/document_detail/2863211.html).
   * 
   * @example
   * AnalyticDB_CPU_Usage_Percentage
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the regions and availability zones supported by AnalyticDB for MySQL, including the region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource pool.
   * 
   * @example
   * user_default
   */
  resourcePools?: string;
  /**
   * @remarks
   * The start of the time range. The time is in UTC and must be in the *yyyy-MM-ddTHH:mmZ* format.
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

