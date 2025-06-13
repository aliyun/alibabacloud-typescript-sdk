// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHALogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  Queries the HA failover records of the Node `DBNodeId` . You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of the clusters that belong to your Alibaba Cloud account, such as node IDs.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @example
   * 2020-09-23T01:01:00Z
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 2020-05-01T00:00Z
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

