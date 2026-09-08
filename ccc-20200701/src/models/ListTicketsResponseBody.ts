// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Assignee ID.
   * 
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @remarks
   * Assignee name.
   * 
   * @example
   * Assignee
   */
  assigneeName?: string;
  /**
   * @remarks
   * Ticket category ID.
   * 
   * @example
   * 43c2671b-*****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * Ticket category name.
   * 
   * @example
   * 类目1
   */
  categoryName?: string;
  /**
   * @remarks
   * Ticket close reason.
   * 
   * @example
   * Completed
   */
  closeCode?: string;
  /**
   * @remarks
   * Comment.
   * 
   * @example
   * 无
   */
  comment?: string;
  /**
   * @remarks
   * Ticket form information.
   * 
   * @example
   * {"productName":"alynx"}
   */
  context?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1631440860000
   */
  createdTime?: string;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @remarks
   * Creator name.
   * 
   * @example
   * Creator
   */
  creatorName?: string;
  /**
   * @remarks
   * Current node ID.
   * 
   * @example
   * 0707dab6-34a8-11ef-9823-161e3802b2d4
   */
  currentTaskId?: string;
  /**
   * @remarks
   * Current node name.
   * 
   * @example
   * 节点1
   */
  currentTaskName?: string;
  /**
   * @remarks
   * Current node start time.
   * 
   * @example
   * 1631440860000
   */
  currentTaskStartTime?: number;
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 51e155ce-*****1-b402-13c69597b920
   */
  customerId?: string;
  /**
   * @remarks
   * Ticket end time.
   * 
   * @example
   * 1631440860000
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * job-47150***150396416
   */
  jobId?: string;
  /**
   * @remarks
   * Ticket source.
   * 
   * @example
   * CHAT
   */
  source?: string;
  /**
   * @remarks
   * Ticket start time.
   * 
   * @example
   * 1631440860000
   */
  startTime?: number;
  /**
   * @remarks
   * State.
   * 
   * @example
   * Processing
   */
  state?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * c844a5f0-496c-4c5b-8a0c-dd27686e8ff6
   */
  templateId?: string;
  /**
   * @remarks
   * Template version.
   * 
   * @example
   * 0
   */
  templateVersion?: string;
  /**
   * @remarks
   * Ticket ID.
   * 
   * @example
   * feb83abd-9f08-49d2-9b56-41d1b66ca0ac
   */
  ticketId?: string;
  /**
   * @remarks
   * Ticket title.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1631440860000
   */
  updatedTime?: string;
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
      createdTime: 'string',
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
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Tickets list.
   */
  list?: ListTicketsResponseBodyDataList[];
  /**
   * @remarks
   * Paging ordinal number. Range: 1-100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Paging size. Range: 1-100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTicketsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListTicketsResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7BEEA660-A45A-45E3-98CC-AFC65E715C23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTicketsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

