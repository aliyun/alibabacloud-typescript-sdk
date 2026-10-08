// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC).
   * > The interval between the start time and end time must be greater than the monitoring frequency of your instance. Otherwise, an empty list may be returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 2012-06-18T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple values with commas (,). You can specify up to 30 metrics. For more information, see [Performance parameters](https://help.aliyun.com/document_detail/26316.html).
   * > If **Key** is set to **MySQL_SpaceUsage** or **SQLServer_SpaceUsage**, only monitoring data within the last day can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_NetworkTraffic
   */
  key?: string;
  /**
   * @remarks
   * The unique identifier of the instance.
   * 
   * @example
   * 339****
   */
  nodeId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC).
   * > The interval between the start time and end time must be greater than the monitoring frequency of your instance. Otherwise, an empty list may be returned.
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

