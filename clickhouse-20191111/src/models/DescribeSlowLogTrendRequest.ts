// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all clusters in a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp11xxl475ui8****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the \\`yyyy-MM-dd hh:mm:ss\\` format. The time is in UTC.
   * 
   * > The end time must be later than the start time. The time range cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-27 16:00:00
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The execution duration of a slow SQL query, in milliseconds. The minimum value is **1000**. The default value is **1000**. The operation returns slow SQL queries that take longer than this duration to execute.
   * 
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The region ID. Call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the \\`yyyy-MM-dd hh:mm:ss\\` format. The time is in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-20 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      queryDurationMs: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

