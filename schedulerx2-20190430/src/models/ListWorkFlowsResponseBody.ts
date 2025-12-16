// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkFlowsResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The calendar.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1144881807903942
   */
  creator?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * test3
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * @example
   * 4a06d5ea-f576-4326-842c-fb14ea043d8d
   */
  namespace?: string;
  /**
   * @remarks
   * The time expression.
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type of the workflow.
   * 
   * @example
   * cron
   */
  timeType?: string;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * 1144881807903942
   */
  updater?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 1339
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      calendar: 'Calendar',
      creator: 'Creator',
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      namespace: 'Namespace',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      updater: 'Updater',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendar: 'string',
      creator: 'string',
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'string',
      name: 'string',
      namespace: 'string',
      timeExpression: 'string',
      timeType: 'string',
      updater: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowsResponseBodyData extends $dara.Model {
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
   * The row of data.
   */
  records?: ListWorkFlowsResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListWorkFlowsResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the workflow.
   */
  data?: ListWorkFlowsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * workflow is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWorkFlowsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

