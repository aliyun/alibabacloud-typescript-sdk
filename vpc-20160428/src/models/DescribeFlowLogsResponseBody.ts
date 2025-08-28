// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * FinanceJoshua
   */
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
  /**
   * @remarks
   * The sampling interval of the flow log. Unit: minutes.
   * 
   * @example
   * 10
   */
  aggregationInterval?: number;
  /**
   * @remarks
   * The business status. Values:
   * 
   * - **Normal**: Normal status.
   * - **FinancialLocked**: Locked due to unpaid bills.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time of the flow log.
   * 
   * @example
   * 2022-01-21T03:08:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * When log delivery fails, you can troubleshoot based on the error messages. Possible error messages include:
   * - **UnavaliableTarget**: The Logstore of the Log Service SLS is unavailable and cannot receive logs. It is recommended to check if the corresponding Logstore actually exists and is accessible. 
   * - **ProjectNotExist**: The Project of the Log Service SLS does not exist. It is suggested to delete the original flow log and create a new one pointing to an existing Project. 
   * - **UnknownError**: An internal error has occurred. Please try again later.
   * 
   * @example
   * UnavaliableTarget
   */
  flowLogDeliverErrorMessage?: string;
  /**
   * @remarks
   * The delivery status of the flow log, with values:
   * - **SUCCESS**: Delivery succeeded. 
   * - **FAILED**: Delivery failed.
   * 
   * @example
   * FAILED
   */
  flowLogDeliverStatus?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * fl-bp1f6qqhsrc2c12ta****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The type of IP address for collecting flow log traffic.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The Logstore where the captured traffic is stored.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The Project that manages the captured traffic.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID to which the flow log belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the flow log belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID of the traffic captured by the flow log.
   * 
   * @example
   * eni-askldfas****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type of the traffic captured by the flow log:
   * 
   * - **NetworkInterface**: Elastic network interface.
   * - **VSwitch**: All elastic network interfaces within a VSwitch.
   * - **VPC**: All elastic network interfaces within a VPC.
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The hosting type of the cloud service.
   * - It can be empty, indicating that the flow log was created by the user. 
   * - When not empty, the only supported value is: **sls**, indicating that the flow log was created through the Log Service console.
   * > Flow log instances created through the Log Service console can be displayed in the VPC list, but they cannot be modified, started, stopped, or deleted within the VPC. If you need to perform these operations on the flow log, you can log in to the [Log Service console](https://sls.console.aliyun.com) to modify, start, stop, or delete it.
   * 
   * @example
   * sls
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the flow log. Values:
   * - **Active**: The flow log is in an active state.
   * 
   * - **Activating**: The flow log is being created.
   * 
   * - **Inactive**: The flow log is in an inactive state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * List of tags
   */
  tags?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTags;
  /**
   * @remarks
   * The path of the captured traffic. Values:
   * 
   * - **all**: Indicates full collection.
   * - **internetGateway**: Indicates public network traffic collection.
   */
  trafficPath?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTrafficPath;
  /**
   * @remarks
   * The type of traffic captured by the flow log. Values:
   * 
   * - **All**: All traffic.
   * - **Allow**: Traffic allowed by access control.
   * - **Drop**: Traffic denied by access control.
   * 
   * @example
   * All
   */
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
  /**
   * @remarks
   * List of flow logs.
   */
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

