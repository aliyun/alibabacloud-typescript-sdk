// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the cluster in Enterprise Edition, Basic Edition, or Data Lakehouse Edition.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * >You can call the [DescribeDBClusters](~~~612397~~~) operation to query the IDs of all clusters in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in UTC in the format of <i>yyyy-MM-ddTHH:mmZ</i>.
   * 
   * > The end time must be later than the start time, and the interval between the start time and end time cannot exceed two days.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the performance metric (metric key) to query. Separate multiple values with commas (,). For more information about supported metrics, see [Monitoring metrics overview](https://help.aliyun.com/document_detail/2863211.html).
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
   * The start time of the query. Specify the time in UTC in the format of <i>yyyy-MM-ddTHH:mmZ</i>.
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

