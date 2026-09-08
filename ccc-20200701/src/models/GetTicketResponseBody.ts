// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the assignee.
   * 
   * @example
   * agent1@ccc-test
   */
  assignee?: string;
  /**
   * @remarks
   * The name of the assignee.
   * 
   * @example
   * 坐席A
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
   * The name of the ticket category.
   * 
   * @example
   * 售后类目
   */
  categoryName?: string;
  /**
   * @remarks
   * The reason for closing the ticket.
   * 
   * - Completed
   * 
   * - Terminated
   * 
   * @example
   * Completed
   */
  closeCode?: string;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * 无
   */
  comment?: string;
  /**
   * @remarks
   * The fields of the ticket.
   * 
   * @example
   * {"productName":"商品A"}
   */
  context?: string;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 1620259200000
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * 坐席B
   */
  creatorName?: string;
  /**
   * @remarks
   * The ID of the current node.
   * 
   * @example
   * 912f0b78-6639-4a93-ae18-0d832885c27e
   */
  currentTaskId?: string;
  /**
   * @remarks
   * The name of the current node.
   * 
   * @example
   * 节点1
   */
  currentTaskName?: string;
  /**
   * @remarks
   * The time when the current node started.
   * 
   * @example
   * 1693793208075
   */
  currentTaskStartTime?: number;
  /**
   * @remarks
   * The customer ID. This is the customer ID in the customer profile of Cloud Contact Center.
   * 
   * @example
   * 4223-86d0-6bd187905-891798749
   */
  customerId?: string;
  /**
   * @remarks
   * The time when the ticket processing was completed.
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
   * The source of the ticket.
   * 
   * - AUDIO: Voice service.
   * 
   * - CHAT: Web service.
   * 
   * - Console: Created in the ticket console.
   * 
   * @example
   * Audio
   */
  source?: string;
  /**
   * @remarks
   * The time when the ticket processing started.
   * 
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @remarks
   * The ticket status.
   * 
   * - Processing
   * 
   * - Withdrawal
   * 
   * - Rejected
   * 
   * - Closed
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
   * The version of the ticket template.
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
   * 售后工单
   */
  title?: string;
  /**
   * @remarks
   * The time of the last update.
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
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The list of incorrect parameters.
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

