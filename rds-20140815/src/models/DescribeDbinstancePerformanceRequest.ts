// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * >  The time span between the beginning time and the end time must be longer than the monitoring frequency. Otherwise, this operation may return an empty array.
   * 
   * This parameter is required.
   * 
   * @example
   * 2012-06-18T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple values with commas (,). You can specify up to 30 values. For more information, see [Performance parameters](https://help.aliyun.com/document_detail/26316.html).
   * 
   * >  If you set **Key** to **MySQL_SpaceUsage** or **SQLServer_SpaceUsage**, you can query the monitoring data within only one day.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_Sessions
   */
  key?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 339****
   */
  nodeId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * >  The time span between the beginning time and the end time must be longer than the monitoring frequency. Otherwise, this operation may return an empty array.
   * 
   * This parameter is required.
   * 
   * @example
   * 2012-06-08T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      nodeId: 'NodeId',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      key: 'string',
      nodeId: 'string',
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

