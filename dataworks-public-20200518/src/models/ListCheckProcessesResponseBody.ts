// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckProcessesResponseBodyPagingInfoCheckProcesses extends $dara.Model {
  /**
   * @remarks
   * The event code of the extension point.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The name of the extension point event.
   * 
   * @example
   * DnsEvent
   */
  eventName?: string;
  /**
   * @remarks
   * The English name of the event.
   * 
   * @example
   * Pre-event for Node Commit
   */
  eventNameEn?: string;
  /**
   * @remarks
   * The message ID of the DataWorks open message. After an extension point event is triggered, you can obtain the message ID from the received event message.
   * 
   * @example
   * b824a5de-4223-4315-af3e-c4449d236db4
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 297635
   */
  operator?: string;
  /**
   * @remarks
   * The process instance ID.
   * 
   * @example
   * rdk_generate_d395da25-b0d3-4114-b2a5-d0247444a661_none_3496903_365203
   */
  processId?: string;
  /**
   * @remarks
   * The name of the operation object, such as the file name or node name.
   * 
   * @example
   * odps_sql_test
   */
  processName?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 32563
   */
  projectId?: number;
  /**
   * @remarks
   * The check status of the extension. Valid values:
   * 
   * - CHECKING: The check is in progress.
   * - PASSED: The check is passed.
   * - BLOCKED: The check is not passed.
   * 
   * @example
   * CHECKING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventName: 'EventName',
      eventNameEn: 'EventNameEn',
      messageId: 'MessageId',
      operator: 'Operator',
      processId: 'ProcessId',
      processName: 'ProcessName',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
      eventNameEn: 'string',
      messageId: 'string',
      operator: 'string',
      processId: 'string',
      processName: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckProcessesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The details of the extension check processes.
   */
  checkProcesses?: ListCheckProcessesResponseBodyPagingInfoCheckProcesses[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkProcesses: 'CheckProcesses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkProcesses: { 'type': 'array', 'itemType': ListCheckProcessesResponseBodyPagingInfoCheckProcesses },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkProcesses)) {
      $dara.Model.validateArray(this.checkProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckProcessesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListCheckProcessesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListCheckProcessesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

