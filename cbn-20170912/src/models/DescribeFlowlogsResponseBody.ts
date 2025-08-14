// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowlogsResponseBodyFlowLogsFlowLogTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue
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

export class DescribeFlowlogsResponseBodyFlowLogsFlowLogTags extends $dara.Model {
  tag?: DescribeFlowlogsResponseBodyFlowLogsFlowLogTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFlowlogsResponseBodyFlowLogsFlowLogTagsTag },
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

export class DescribeFlowlogsResponseBodyFlowLogsFlowLog extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the flow log was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-24T13:00:52Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * flowlog-m5evbtbpt****
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
   * The flow log version.
   * 
   * Flow logs are automatically created in the latest version, which is **3**.
   * 
   * @example
   * 3
   */
  flowLogVersion?: string;
  /**
   * @remarks
   * The time window for collecting log data. Unit: seconds. Valid values: **60** or **600** Default value: **600**.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The string that defines the format of the flow log. Format:
   * 
   * `${Field 1}${Field 2}${Field 3}`
   * 
   * @example
   * ${srcaddr}${dstaddr}${bytes}
   */
  logFormatString?: string;
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
   * The name of the project that stores the captured traffic data.
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
   * The status of the flow log. Valid values:
   * 
   * *   **Active**: The flow log is enabled.
   * *   **Inactive**: The flow log is disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeFlowlogsResponseBodyFlowLogsFlowLogTags;
  /**
   * @remarks
   * The ID of the network instance connection
   * 
   * @example
   * tr-attach-5x4o4ynzuqbv6g****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-bp1g9313sx675zr1lajmj
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      flowLogVersion: 'FlowLogVersion',
      interval: 'Interval',
      logFormatString: 'LogFormatString',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      flowLogVersion: 'string',
      interval: 'number',
      logFormatString: 'string',
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      status: 'string',
      tags: DescribeFlowlogsResponseBodyFlowLogsFlowLogTags,
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowlogsResponseBodyFlowLogs extends $dara.Model {
  flowLog?: DescribeFlowlogsResponseBodyFlowLogsFlowLog[];
  static names(): { [key: string]: string } {
    return {
      flowLog: 'FlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLog: { 'type': 'array', 'itemType': DescribeFlowlogsResponseBodyFlowLogsFlowLog },
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

export class DescribeFlowlogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the flow log.
   */
  flowLogs?: DescribeFlowlogsResponseBodyFlowLogs;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
      flowLogs: DescribeFlowlogsResponseBodyFlowLogs,
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

