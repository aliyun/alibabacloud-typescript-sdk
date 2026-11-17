// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The cause of the exception. This field has a value only when status is abnormal.
   * 
   * @example
   * string_value
   */
  abnormalReason?: string;
  /**
   * @remarks
   * Indicates whether the current caller can delete the task. This is valid only for the task creator and group owner. For personal tasks, the value is always true.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the course can be edited or deleted.
   * 
   * @example
   * true
   */
  canEdit?: boolean;
  /**
   * @remarks
   * Indicates whether the current caller can immediately execute the task. Visible means operable. For abnormal tasks, the value is false. For personal tasks, the value is always true.
   * 
   * @example
   * true
   */
  canExecute?: boolean;
  /**
   * @remarks
   * Indicates whether the current caller can start or stop the task. This is valid only for the task creator and group owner. For abnormal tasks, the value is false. For personal tasks, the value is always true.
   * 
   * @example
   * true
   */
  canToggle?: boolean;
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs, such as cg_101. If this parameter is specified, a group space task is created, and the caller must be a valid group member. If this parameter is left empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * string_value
   */
  creator?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * string_value
   */
  creatorName?: string;
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * string_value
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The list of digital employee names.
   * 
   * @example
   * ["pcitc-magent"]
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * The cumulative number of executions.
   * 
   * @example
   * 1
   */
  executionCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether public access is enabled.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The execution model tier. If this parameter is not specified, the model tier is not updated.
   * 
   * @example
   * standard
   */
  model?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The task output session mode.
   * 
   * @example
   * NEW_CONVERSATION
   */
  outputMode?: string;
  /**
   * @remarks
   * The task status. Running is returned immediately after submission.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the trigger.
   * 
   * @example
   * string_value
   */
  triggerType?: string;
  /**
   * @remarks
   * The visibility scope of the group task. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaboration members), and PUBLIC (visible to all group members). Default value for group tasks: PRIVATE. This field is ignored for personal tasks.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  /**
   * @remarks
   * The list of collaboration members, excluding the task creator and group creator, which are covered by the authentication layer. This field is returned only for group tasks. An empty list is returned for PRIVATE or PUBLIC visibility scopes.
   * 
   * @example
   * ["1001"]
   */
  visibleMemberUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      abnormalReason: 'abnormalReason',
      canDelete: 'canDelete',
      canEdit: 'canEdit',
      canExecute: 'canExecute',
      canToggle: 'canToggle',
      collaborationGroupId: 'collaborationGroupId',
      creator: 'creator',
      creatorName: 'creatorName',
      cronExpression: 'cronExpression',
      description: 'description',
      digitalEmployeeName: 'digitalEmployeeName',
      executionCount: 'executionCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      outputMode: 'outputMode',
      status: 'status',
      taskId: 'taskId',
      triggerType: 'triggerType',
      visibility: 'visibility',
      visibleMemberUserIds: 'visibleMemberUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalReason: 'string',
      canDelete: 'boolean',
      canEdit: 'boolean',
      canExecute: 'boolean',
      canToggle: 'boolean',
      collaborationGroupId: 'string',
      creator: 'string',
      creatorName: 'string',
      cronExpression: 'string',
      description: 'string',
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      executionCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      outputMode: 'string',
      status: 'string',
      taskId: 'string',
      triggerType: 'string',
      visibility: 'string',
      visibleMemberUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.digitalEmployeeName)) {
      $dara.Model.validateArray(this.digitalEmployeeName);
    }
    if(Array.isArray(this.visibleMemberUserIds)) {
      $dara.Model.validateArray(this.visibleMemberUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more data is available. Valid values: true (yes) and false (no).
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of skill cards.
   */
  items?: ListScheduledTasksResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records to return for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * @example
   * 1763604514518000_531300
   */
  nextToken?: string;
  /**
   * @remarks
   * The specified page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
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
      items: { 'type': 'array', 'itemType': ListScheduledTasksResponseBodyItems },
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

