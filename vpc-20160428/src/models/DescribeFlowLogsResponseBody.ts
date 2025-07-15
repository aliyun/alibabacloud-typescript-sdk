// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsResponseBodyFlowLogsFlowLogTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
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
   * The business status of the flow log. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the flow log was created.
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
   * If the flow log failed to be delivered, you can troubleshoot based on the following error messages that may be returned:
   * 
   * *   **UnavaliableTarget**: The Logstore of SLS is unavailable and cannot receive logs. Check whether the Logstore is available.
   * *   **ProjectNotExist**: The project of SLS does not exist. We recommend that you delete the project and create a new one.
   * *   **UnknownError**: An internal error occurred. Try again later.
   * 
   * @example
   * UnavaliableTarget
   */
  flowLogDeliverErrorMessage?: string;
  /**
   * @remarks
   * Indicates whether the flow log is delivered. Valid values:
   * - **SUCCESS** 
   * - **FAILED**
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
  ipVersion?: string;
  /**
   * @remarks
   * The Logstore that stores the captured traffic data.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The project that manages the captured traffic data.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log.
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
   * The ID of the resource from which traffic is captured.
   * 
   * @example
   * eni-askldfas****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource from which traffic is captured. Valid values:
   * 
   * *   **NetworkInterface**: ENI
   * *   **VSwitch**: all ENIs in a vSwitch
   * *   **VPC**: all ENIs in a VPC
   * 
   * @example
   * NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The hosting type of the cloud service.
   * 
   * *   This parameter can be empty, which indicates that the flow log is created by the user.
   * *   If this parameter is not empty, the value is set to **sls**. The value sls indicates that the flow log is created in the Simple Log Service (SLS) console.
   * 
   * > A flow log that is created in the SLS console can be displayed in the VPC list. However, you cannot modify, start, stop, or delete the flow log in the VPC console. If you want to manage the flow log, you can log on to the [SLS console](https://sls.console.aliyun.com) and perform required operations.
   * 
   * @example
   * sls
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the flow log. Valid values:
   * 
   * *   **Active**
   * *   **Activating**
   * *   **Inactive**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTags;
  /**
   * @remarks
   * The sampling scope of the traffic that is collected. Valid values:
   * 
   * *   **all** (default value): all traffic
   * *   **internetGateway**: Internet traffic
   * 
   * > By default, the traffic path feature is unavailable. To use this feature, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex).
   */
  trafficPath?: DescribeFlowLogsResponseBodyFlowLogsFlowLogTrafficPath;
  /**
   * @remarks
   * The type of traffic that is captured by the flow log. Valid values:
   * 
   * *   **All**: all traffic
   * *   **Allow**: traffic that is allowed by access control
   * *   **Drop**: traffic that is denied by access control
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
   * The information about the flow logs.
   */
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
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
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The number of flow logs that are queried.
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

