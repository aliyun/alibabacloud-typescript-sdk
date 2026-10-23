// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodosResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of assignees.
   * 
   * @example
   * 2
   */
  assigneeCount?: number;
  /**
   * @remarks
   * The completion time in the YYYY-MM-DD HH:mm:ss format (UTC+8).
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  completedAt?: string;
  /**
   * @remarks
   * The user ID of the user who completed the item. This field is empty if the item is not completed.
   * 
   * @example
   * 42
   */
  completedByUserId?: string;
  /**
   * @remarks
   * The name of the user who completed the item. This field is empty if the item is not completed.
   * 
   * @example
   * John Doe
   */
  completedByUserName?: string;
  /**
   * @remarks
   * The creation time in the YYYY-MM-DD HH:mm:ss format (UTC+8).
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time in the YYYY-MM-DD HH:mm:ss format (UTC+8).
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the caller has read the item.
   * 
   * @example
   * false
   */
  isRead?: boolean;
  /**
   * @remarks
   * The message ID of the assistant that sent the to-do item. This field is empty if there is no conversation source.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * The action status of the caller as an assignee.
   * 
   * @example
   * PENDING
   */
  myAssigneeStatus?: string;
  /**
   * @remarks
   * The list display status for the caller.
   * 
   * @example
   * TODO
   */
  myDisplayState?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * The number of questions.
   * 
   * @example
   * 1
   */
  questionCount?: number;
  /**
   * @remarks
   * The list of question summaries.
   */
  questionSummaries?: string[];
  /**
   * @remarks
   * The source context. This context is passed through as-is during creation.
   * 
   * @example
   * source=openapi
   */
  sourceContext?: { [key: string]: any };
  /**
   * @remarks
   * The source type of the to-do item.
   * 
   * @example
   * WORKFLOW
   */
  sourceType?: string;
  /**
   * @remarks
   * The primary status of the to-do item.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The to-do title.
   * 
   * @example
   * Governance approval
   */
  title?: string;
  /**
   * @remarks
   * The to-do ID.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      assigneeCount: 'assigneeCount',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      completedByUserName: 'completedByUserName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      isRead: 'isRead',
      messageId: 'messageId',
      myAssigneeStatus: 'myAssigneeStatus',
      myDisplayState: 'myDisplayState',
      priority: 'priority',
      questionCount: 'questionCount',
      questionSummaries: 'questionSummaries',
      sourceContext: 'sourceContext',
      sourceType: 'sourceType',
      status: 'status',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeCount: 'number',
      completedAt: 'string',
      completedByUserId: 'string',
      completedByUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isRead: 'boolean',
      messageId: 'string',
      myAssigneeStatus: 'string',
      myDisplayState: 'string',
      priority: 'string',
      questionCount: 'number',
      questionSummaries: { 'type': 'array', 'itemType': 'string' },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      status: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questionSummaries)) {
      $dara.Model.validateArray(this.questionSummaries);
    }
    if(this.sourceContext) {
      $dara.Model.validateMap(this.sourceContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTodosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more data is available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of to-do items on the current page.
   */
  items?: ListTodosResponseBodyItems[];
  /**
   * @remarks
   * The effective maximum number of entries to return per page for the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. This field is an empty string if no more data is available.
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The effective number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of visible items under the filter conditions.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListTodosResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

