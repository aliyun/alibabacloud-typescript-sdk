// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The action performed on the node.
   * 
   * @example
   * CounterSignTask
   */
  action?: string;
  /**
   * @remarks
   * The ID of the assignee.
   * 
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @remarks
   * The name of the assignee.
   * 
   * @example
   * assignee
   */
  assigneeName?: string;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * 同意
   */
  comment?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1620269200000
   */
  endTime?: number;
  /**
   * @remarks
   * A list of files.
   */
  fileKeys?: string[];
  /**
   * @remarks
   * A list of file access URLs.
   */
  fileUrls?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the ticket node in the process definition.
   * 
   * @example
   * APPROVAL__6zu2QjAz
   */
  taskDefinitionNodeId?: string;
  /**
   * @remarks
   * The type of the ticket node in the process definition.
   * 
   * @example
   * APPROVAL
   */
  taskDefinitionNodeType?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * eb039a4a6a5742c6b44ccff0c1fca745
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * 节点1
   */
  taskName?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListTicketTasksResponseBodyData[];
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
   * A list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
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

