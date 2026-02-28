// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTags extends $dara.Model {
  tag?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTrafficPath extends $dara.Model {
  trafficPathList?: string[];
  static names(): { [key: string]: string } {
    return {
      trafficPathList: 'TrafficPathList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficPathList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trafficPathList)) {
      $dara.Model.validateArray(this.trafficPathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogsFlowLog extends $dara.Model {
  aggregationInterval?: number;
  businessStatus?: string;
  creationTime?: string;
  description?: string;
  flowLogDeliverErrorMessage?: string;
  flowLogDeliverStatus?: string;
  flowLogId?: string;
  flowLogName?: string;
  ipVersion?: string;
  logStoreName?: string;
  projectName?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  serviceType?: string;
  status?: string;
  tags?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTags;
  trafficPath?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTrafficPath;
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationInterval: 'AggregationInterval',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      flowLogDeliverErrorMessage: 'FlowLogDeliverErrorMessage',
      flowLogDeliverStatus: 'FlowLogDeliverStatus',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      ipVersion: 'IpVersion',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceType: 'ServiceType',
      status: 'Status',
      tags: 'Tags',
      trafficPath: 'TrafficPath',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationInterval: 'number',
      businessStatus: 'string',
      creationTime: 'string',
      description: 'string',
      flowLogDeliverErrorMessage: 'string',
      flowLogDeliverStatus: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      ipVersion: 'string',
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      serviceType: 'string',
      status: 'string',
      tags: DescribeFlowLogsResponseBodyFlowLogsFlowLogTags,
      trafficPath: DescribeFlowLogsResponseBodyFlowLogsFlowLogTrafficPath,
      trafficType: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.trafficPath && typeof (this.trafficPath as any).validate === 'function') {
      (this.trafficPath as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogs extends $dara.Model {
  flowLog?: DescribeFlowLogsResponseBodyFlowLogsFlowLog[];
  static names(): { [key: string]: string } {
    return {
      flowLog: 'FlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLog: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLog },
    };
  }

  validate() {
    if(Array.isArray(this.flowLog)) {
      $dara.Model.validateArray(this.flowLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBody extends $dara.Model {
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of items per page in a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The number of entries in the queried flow log list.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogs: 'FlowLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogs: DescribeFlowLogsResponseBodyFlowLogs,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.flowLogs && typeof (this.flowLogs as any).validate === 'function') {
      (this.flowLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

