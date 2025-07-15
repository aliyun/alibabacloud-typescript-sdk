// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketResponseBodyData extends $dara.Model {
  /**
   * @example
   * agent1@ccc-test
   */
  assignee?: string;
  assigneeName?: string;
  /**
   * @example
   * 8939-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  categoryName?: string;
  /**
   * @example
   * Completed
   */
  closeCode?: string;
  comment?: string;
  context?: string;
  /**
   * @example
   * 1620259200000
   */
  createdTime?: number;
  /**
   * @example
   * creator@ccc-test
   */
  creator?: string;
  creatorName?: string;
  /**
   * @example
   * 912f0b78-6639-4a93-ae18-0d832885c27e
   */
  currentTaskId?: string;
  currentTaskName?: string;
  /**
   * @example
   * 1693793208075
   */
  currentTaskStartTime?: number;
  /**
   * @example
   * 4223-86d0-6bd187905-891798749
   */
  customerId?: string;
  /**
   * @example
   * 1687846259999
   */
  endTime?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * job-399383842187575296
   */
  jobId?: string;
  /**
   * @example
   * Audio
   */
  source?: string;
  /**
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @example
   * Processing
   */
  state?: string;
  /**
   * @example
   * ccc-test_43c2671b-8939-4223-86d0-6bd187905cc8_*****0666238
   */
  templateId?: string;
  /**
   * @example
   * 0
   */
  templateVersion?: string;
  /**
   * @example
   * b3a6a131-359e-46bd-9bc5-1f5cb0ea093f
   */
  ticketId?: string;
  title?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetTicketResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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

