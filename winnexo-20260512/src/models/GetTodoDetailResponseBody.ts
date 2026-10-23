// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoDetailResponseBodyAssignees extends $dara.Model {
  /**
   * @remarks
   * The action time in UTC+8. This field is empty if the item is not processed.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  actedAt?: string;
  /**
   * @remarks
   * The source of the assignee. Valid values: ORIGINAL and TRANSFERRED.
   * 
   * @example
   * ORIGINAL
   */
  assigneeSource?: string;
  /**
   * @remarks
   * The user ID of the assignee.
   * 
   * @example
   * 42
   */
  assigneeUserId?: string;
  /**
   * @remarks
   * The read time in UTC+8. This field is empty if the item is unread.
   * 
   * @example
   * 2026-10-12 10:01:00
   */
  readAt?: string;
  /**
   * @remarks
   * The action status of the assignee.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The user ID of the user who transferred the task. This field is populated only when the task is transferred.
   * 
   * @example
   * 43
   */
  transferredFromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      actedAt: 'actedAt',
      assigneeSource: 'assigneeSource',
      assigneeUserId: 'assigneeUserId',
      readAt: 'readAt',
      status: 'status',
      transferredFromUserId: 'transferredFromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actedAt: 'string',
      assigneeSource: 'string',
      assigneeUserId: 'string',
      readAt: 'string',
      status: 'string',
      transferredFromUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoDetailResponseBodyQuestionsOptions extends $dara.Model {
  /**
   * @remarks
   * The supplementary description of the option.
   * 
   * @example
   * Supplementary description of the option
   */
  description?: string;
  /**
   * @remarks
   * The option text (reference key).
   * 
   * @example
   * Approve
   */
  label?: string;
  /**
   * @remarks
   * Indicates whether the option is recommended.
   * 
   * @example
   * false
   */
  recommended?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      label: 'label',
      recommended: 'recommended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      recommended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoDetailResponseBodyQuestions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether custom input is allowed.
   * 
   * @example
   * false
   */
  allowCustom?: boolean;
  /**
   * @remarks
   * The text for the custom input field.
   * 
   * @example
   * Other
   */
  customLabel?: string;
  /**
   * @remarks
   * The maximum length for custom input.
   * 
   * @example
   * 200
   */
  customMaxLength?: number;
  /**
   * @remarks
   * The placeholder for custom input.
   * 
   * @example
   * Please specify
   */
  customPlaceholder?: string;
  /**
   * @remarks
   * The maximum length for text questions.
   * 
   * @example
   * 500
   */
  maxLength?: number;
  /**
   * @remarks
   * The response mode. Valid values: SINGLE_CHOICE, MULTI_CHOICE, and TEXT.
   * 
   * @example
   * SINGLE_CHOICE
   */
  mode?: string;
  /**
   * @remarks
   * The options. This field is required for choice questions.
   */
  options?: GetTodoDetailResponseBodyQuestionsOptions[];
  /**
   * @remarks
   * The placeholder for text questions.
   * 
   * @example
   * Please enter
   */
  placeholder?: string;
  /**
   * @remarks
   * The question text (reference key).
   * 
   * @example
   * Whether to approve
   */
  question?: string;
  /**
   * @remarks
   * Indicates whether the question is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCustom: 'allowCustom',
      customLabel: 'customLabel',
      customMaxLength: 'customMaxLength',
      customPlaceholder: 'customPlaceholder',
      maxLength: 'maxLength',
      mode: 'mode',
      options: 'options',
      placeholder: 'placeholder',
      question: 'question',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCustom: 'boolean',
      customLabel: 'string',
      customMaxLength: 'number',
      customPlaceholder: 'string',
      maxLength: 'number',
      mode: 'string',
      options: { 'type': 'array', 'itemType': GetTodoDetailResponseBodyQuestionsOptions },
      placeholder: 'string',
      question: 'string',
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoDetailResponseBody extends $dara.Model {
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
   * All assignees.
   */
  assignees?: GetTodoDetailResponseBodyAssignees[];
  /**
   * @remarks
   * The attachment policy. Attachments are not stored in the database in the current version.
   * 
   * @example
   * allowUpload=true
   */
  attachmentPolicy?: { [key: string]: any };
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
   * The completion time in UTC+8 (YYYY-MM-DD HH:mm:ss).
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
   * Zhang San
   */
  completedByUserName?: string;
  /**
   * @remarks
   * The creation time in UTC+8 (YYYY-MM-DD HH:mm:ss).
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time in UTC+8 (YYYY-MM-DD HH:mm:ss).
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
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The ID of the assistant message that generated the to-do item. This field is empty if there is no conversation source.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * The action status of the caller as the assignee.
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
   * The permissions of the caller, such as canSubmit and canTransfer.
   * 
   * @example
   * APP/VIEW=true
   */
  myPermissions?: { [key: string]: any };
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
   * The list of questions (structured projection).
   */
  questions?: GetTodoDetailResponseBodyQuestions[];
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
   * The response content in JSONB format as-is. Defaults to an empty object if not submitted.
   * 
   * @example
   * result=Approved
   */
  resultPayload?: { [key: string]: any };
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
   * The workflow ID. This field is required when sourceType is set to WORKFLOW.
   * 
   * @example
   * wf-1
   */
  sourceWorkflowId?: string;
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
   * The summary of the to-do item.
   * 
   * @example
   * Please approve the following items
   */
  summary?: string;
  /**
   * @remarks
   * The title of the to-do item.
   * 
   * @example
   * Governance approval
   */
  title?: string;
  /**
   * @remarks
   * The ID of the to-do item.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      assigneeCount: 'assigneeCount',
      assignees: 'assignees',
      attachmentPolicy: 'attachmentPolicy',
      code: 'code',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      completedByUserName: 'completedByUserName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      isRead: 'isRead',
      message: 'message',
      messageId: 'messageId',
      myAssigneeStatus: 'myAssigneeStatus',
      myDisplayState: 'myDisplayState',
      myPermissions: 'myPermissions',
      priority: 'priority',
      questions: 'questions',
      requestId: 'requestId',
      resultPayload: 'resultPayload',
      sourceContext: 'sourceContext',
      sourceType: 'sourceType',
      sourceWorkflowId: 'sourceWorkflowId',
      status: 'status',
      summary: 'summary',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeCount: 'number',
      assignees: { 'type': 'array', 'itemType': GetTodoDetailResponseBodyAssignees },
      attachmentPolicy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      completedAt: 'string',
      completedByUserId: 'string',
      completedByUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isRead: 'boolean',
      message: 'string',
      messageId: 'string',
      myAssigneeStatus: 'string',
      myDisplayState: 'string',
      myPermissions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      priority: 'string',
      questions: { 'type': 'array', 'itemType': GetTodoDetailResponseBodyQuestions },
      requestId: 'string',
      resultPayload: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      sourceWorkflowId: 'string',
      status: 'string',
      summary: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    if(this.attachmentPolicy) {
      $dara.Model.validateMap(this.attachmentPolicy);
    }
    if(this.myPermissions) {
      $dara.Model.validateMap(this.myPermissions);
    }
    if(Array.isArray(this.questions)) {
      $dara.Model.validateArray(this.questions);
    }
    if(this.resultPayload) {
      $dara.Model.validateMap(this.resultPayload);
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

