// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckProcessesResponseBodyPagingInfoCheckProcesses extends $dara.Model {
  /**
   * @remarks
   * Extension point event encoding.
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
   * DataWorks the message ID of the open message. After an extended point event is triggered, you can obtain the message ID from the received event message.
   * 
   * @example
   * b824a5de-4223-4315-af3e-c4449d236db4
   */
  messageId?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 297635
   */
  operator?: string;
  /**
   * @remarks
   * The ID of the process instance.
   * 
   * @example
   * rdk_generate_d395da25-b0d3-4114-b2a5-d0247444a661_none_3496903_365203
   */
  processId?: string;
  /**
   * @remarks
   * The name of the check object, such as the file name or node name.
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
   * The status of the extender check.
   * - CHECKING CHECKING
   * - PASSED the pass check
   * - BLOCKED check failed
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
   * The check details of the extension.
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
   * The number of entries displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The ID of the request.
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

