// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHALogsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node ID.
   * > Queries the HA failover records of the specified DBNodeId. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including node IDs.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * 
   * @example
   * 2025-05-23T01:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The log type.
   * 
   * This parameter is required.
   * 
   * @example
   * HaSwitchLogList
   */
  logType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 5 to 50. Default value: 10.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * 
   * @example
   * 2025-05-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      logType: 'LogType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: 'string',
      endTime: 'string',
      logType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

