// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationSessionLogsResponseBodyItemsItems extends $dara.Model {
  agent?: string;
  api?: string;
  content?: string;
  detailDurationMs?: number;
  detailIsError?: boolean;
  detailStatus?: string;
  id?: string;
  model?: string;
  parentId?: string;
  provider?: string;
  role?: string;
  sessionId?: string;
  status?: string;
  stopReason?: string;
  text?: string;
  thinking?: string;
  thinkingSignature?: string;
  time?: string;
  timestamp?: string;
  toolName?: string;
  totalTokens?: number;
  type?: string;
  usageCacheRead?: number;
  usageCacheWrite?: number;
  usageCostCacheRead?: number;
  usageCostCacheWrite?: number;
  usageCostInput?: number;
  usageCostOutput?: number;
  usageCostTotal?: number;
  usageInput?: number;
  usageOutput?: number;
  usageTotalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      api: 'Api',
      content: 'Content',
      detailDurationMs: 'DetailDurationMs',
      detailIsError: 'DetailIsError',
      detailStatus: 'DetailStatus',
      id: 'Id',
      model: 'Model',
      parentId: 'ParentId',
      provider: 'Provider',
      role: 'Role',
      sessionId: 'SessionId',
      status: 'Status',
      stopReason: 'StopReason',
      text: 'Text',
      thinking: 'Thinking',
      thinkingSignature: 'ThinkingSignature',
      time: 'Time',
      timestamp: 'Timestamp',
      toolName: 'ToolName',
      totalTokens: 'TotalTokens',
      type: 'Type',
      usageCacheRead: 'UsageCacheRead',
      usageCacheWrite: 'UsageCacheWrite',
      usageCostCacheRead: 'UsageCostCacheRead',
      usageCostCacheWrite: 'UsageCostCacheWrite',
      usageCostInput: 'UsageCostInput',
      usageCostOutput: 'UsageCostOutput',
      usageCostTotal: 'UsageCostTotal',
      usageInput: 'UsageInput',
      usageOutput: 'UsageOutput',
      usageTotalTokens: 'UsageTotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      api: 'string',
      content: 'string',
      detailDurationMs: 'number',
      detailIsError: 'boolean',
      detailStatus: 'string',
      id: 'string',
      model: 'string',
      parentId: 'string',
      provider: 'string',
      role: 'string',
      sessionId: 'string',
      status: 'string',
      stopReason: 'string',
      text: 'string',
      thinking: 'string',
      thinkingSignature: 'string',
      time: 'string',
      timestamp: 'string',
      toolName: 'string',
      totalTokens: 'number',
      type: 'string',
      usageCacheRead: 'number',
      usageCacheWrite: 'number',
      usageCostCacheRead: 'number',
      usageCostCacheWrite: 'number',
      usageCostInput: 'number',
      usageCostOutput: 'number',
      usageCostTotal: 'number',
      usageInput: 'number',
      usageOutput: 'number',
      usageTotalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSessionLogsResponseBodyItems extends $dara.Model {
  items?: DescribeApplicationSessionLogsResponseBodyItemsItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeApplicationSessionLogsResponseBodyItemsItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSessionLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  items?: DescribeApplicationSessionLogsResponseBodyItems;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log records returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log records that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      items: DescribeApplicationSessionLogsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

