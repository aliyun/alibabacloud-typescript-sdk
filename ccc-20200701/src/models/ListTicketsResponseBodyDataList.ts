// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @example
   * Assignee
   */
  assigneeName?: string;
  /**
   * @example
   * 43c2671b-*****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  categoryName?: string;
  /**
   * @example
   * Completed
   */
  closeCode?: string;
  comment?: string;
  /**
   * @example
   * {"productName":"alynx"}
   */
  context?: string;
  /**
   * @example
   * 1631440860000
   */
  createdTime?: string;
  /**
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @example
   * Creator
   */
  creatorName?: string;
  /**
   * @example
   * 0707dab6-34a8-11ef-9823-161e3802b2d4
   */
  currentTaskId?: string;
  currentTaskName?: string;
  /**
   * @example
   * 1631440860000
   */
  currentTaskStartTime?: number;
  /**
   * @example
   * 51e155ce-*****1-b402-13c69597b920
   */
  customerId?: string;
  /**
   * @example
   * 1631440860000
   */
  endTime?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * job-47150***150396416
   */
  jobId?: string;
  /**
   * @example
   * CHAT
   */
  source?: string;
  /**
   * @example
   * 1631440860000
   */
  startTime?: number;
  /**
   * @example
   * Processing
   */
  state?: string;
  /**
   * @example
   * c844a5f0-496c-4c5b-8a0c-dd27686e8ff6
   */
  templateId?: string;
  /**
   * @example
   * 0
   */
  templateVersion?: string;
  /**
   * @example
   * feb83abd-9f08-49d2-9b56-41d1b66ca0ac
   */
  ticketId?: string;
  title?: string;
  /**
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

