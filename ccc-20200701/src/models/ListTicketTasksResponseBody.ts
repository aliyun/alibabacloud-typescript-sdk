// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * CounterSignTask
   */
  action?: string;
  /**
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @example
   * assignee
   */
  assigneeName?: string;
  comment?: string;
  /**
   * @example
   * 1620269200000
   */
  endTime?: number;
  fileKeys?: string[];
  fileUrls?: string[];
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @example
   * APPROVAL__6zu2QjAz
   */
  taskDefinitionNodeId?: string;
  /**
   * @example
   * APPROVAL
   */
  taskDefinitionNodeType?: string;
  /**
   * @example
   * eb039a4a6a5742c6b44ccff0c1fca745
   */
  taskId?: string;
  taskName?: string;
  /**
   * @example
   * 5491d3b4-14ee-4341-b5f1-db2c78beddeb
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      assignee: 'Assignee',
      assigneeName: 'AssigneeName',
      comment: 'Comment',
      endTime: 'EndTime',
      fileKeys: 'FileKeys',
      fileUrls: 'FileUrls',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      taskDefinitionNodeId: 'TaskDefinitionNodeId',
      taskDefinitionNodeType: 'TaskDefinitionNodeType',
      taskId: 'TaskId',
      taskName: 'TaskName',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      assignee: 'string',
      assigneeName: 'string',
      comment: 'string',
      endTime: 'number',
      fileKeys: { 'type': 'array', 'itemType': 'string' },
      fileUrls: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      startTime: 'number',
      taskDefinitionNodeId: 'string',
      taskDefinitionNodeType: 'string',
      taskId: 'string',
      taskName: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileKeys)) {
      $dara.Model.validateArray(this.fileKeys);
    }
    if(Array.isArray(this.fileUrls)) {
      $dara.Model.validateArray(this.fileUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketTasksResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListTicketTasksResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE
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
      data: { 'type': 'array', 'itemType': ListTicketTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

