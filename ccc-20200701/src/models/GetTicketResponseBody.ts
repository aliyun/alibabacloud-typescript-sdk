// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The assignee ID.
   * 
   * @example
   * agent1@ccc-test
   */
  assignee?: string;
  /**
   * @remarks
   * The assignee name.
   * 
   * @example
   * Agent A
   */
  assigneeName?: string;
  /**
   * @remarks
   * The ticket category ID.
   * 
   * @example
   * 8939-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * The ticket category name.
   * 
   * @example
   * After-sales category
   */
  categoryName?: string;
  /**
   * @remarks
   * The reason for closing the ticket. Valid values:
   * - Completed: Completed.
   * - Terminated: Canceled.
   * 
   * @example
   * Completed
   */
  closeCode?: string;
  /**
   * @remarks
   * The handling comments.
   * 
   * @example
   * None
   */
  comment?: string;
  /**
   * @remarks
   * The ticket field information.
   * 
   * @example
   * {"productName":"Product A"}
   */
  context?: string;
  /**
   * @remarks
   * The time when the ticket was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1620259200000
   */
  createdTime?: number;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * Agent B
   */
  creatorName?: string;
  /**
   * @remarks
   * The current node ID.
   * 
   * @example
   * 912f0b78-6639-4a93-ae18-0d832885c27e
   */
  currentTaskId?: string;
  /**
   * @remarks
   * The current node name.
   * 
   * @example
   * Node 1
   */
  currentTaskName?: string;
  /**
   * @remarks
   * The start time of the current node. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1693793208075
   */
  currentTaskStartTime?: number;
  /**
   * @remarks
   * The customer ID in the customer profile of Cloud Call Center.
   * 
   * @example
   * 4223-86d0-6bd187905-891798749
   */
  customerId?: string;
  /**
   * @remarks
   * The completion time of ticket processing. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1687846259999
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * job-399383842187575296
   */
  jobId?: string;
  /**
   * @remarks
   * The ticket source. Valid values:
   * - AUDIO: Voice service.
   * - CHAT: Online service.
   * - Console: Created from the ticket console.
   * 
   * @example
   * Audio
   */
  source?: string;
  /**
   * @remarks
   * The start time of ticket processing. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @remarks
   * The ticket status. Valid values:
   * - Processing: Processing.
   * - Withdrawal: Withdrawn.
   * - Rejected: Rejected.
   * - Closed: Closed.
   * 
   * @example
   * Processing
   */
  state?: string;
  /**
   * @remarks
   * The ticket template ID.
   * 
   * @example
   * ccc-test_43c2671b-8939-4223-86d0-6bd187905cc8_*****0666238
   */
  templateId?: string;
  /**
   * @remarks
   * The ticket template version.
   * 
   * @example
   * 0
   */
  templateVersion?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * b3a6a131-359e-46bd-9bc5-1f5cb0ea093f
   */
  ticketId?: string;
  /**
   * @remarks
   * The ticket title.
   * 
   * @example
   * After-sales ticket
   */
  title?: string;
  /**
   * @remarks
   * The time of the last update. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1693793208075
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      assignee: 'Assignee',
      assigneeName: 'AssigneeName',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      closeCode: 'CloseCode',
      comment: 'Comment',
      context: 'Context',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      currentTaskId: 'CurrentTaskId',
      currentTaskName: 'CurrentTaskName',
      currentTaskStartTime: 'CurrentTaskStartTime',
      customerId: 'CustomerId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      source: 'Source',
      startTime: 'StartTime',
      state: 'State',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      ticketId: 'TicketId',
      title: 'Title',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignee: 'string',
      assigneeName: 'string',
      categoryId: 'string',
      categoryName: 'string',
      closeCode: 'string',
      comment: 'string',
      context: 'string',
      createdTime: 'number',
      creator: 'string',
      creatorName: 'string',
      currentTaskId: 'string',
      currentTaskName: 'string',
      currentTaskStartTime: 'number',
      customerId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      source: 'string',
      startTime: 'number',
      state: 'string',
      templateId: 'string',
      templateVersion: 'string',
      ticketId: 'string',
      title: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: GetTicketResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF268B34-09C2-43FD-BAC4-5D31EA633111
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTicketResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

