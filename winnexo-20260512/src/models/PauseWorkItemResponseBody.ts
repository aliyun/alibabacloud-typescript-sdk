// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseWorkItemResponseBodyAttachments extends $dara.Model {
  /**
   * @remarks
   * The attachment ID.
   * 
   * @example
   * example
   */
  attachmentId?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * example
   */
  contentType?: string;
  /**
   * @remarks
   * The access endpoint of the attachment (prefixed with an OpenAPI 302 redirect).
   * 
   * @example
   * example
   */
  refUrl?: string;
  /**
   * @remarks
   * The resource ID of the attachment.
   * 
   * @example
   * example
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type of the attachment.
   * 
   * @example
   * example
   */
  resourceKind?: string;
  /**
   * @remarks
   * The size of the attachment in bytes.
   * 
   * @example
   * 1
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The title of the attachment.
   * 
   * @example
   * example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'attachmentId',
      contentType: 'contentType',
      refUrl: 'refUrl',
      resourceId: 'resourceId',
      resourceKind: 'resourceKind',
      sizeBytes: 'sizeBytes',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      contentType: 'string',
      refUrl: 'string',
      resourceId: 'string',
      resourceKind: 'string',
      sizeBytes: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseWorkItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The acceptance criteria.
   * 
   * @example
   * example
   */
  acceptanceCriteria?: string;
  /**
   * @remarks
   * The applied status version.
   * 
   * @example
   * 1
   */
  appliedStatusVersion?: number;
  /**
   * @remarks
   * The list of input attachments.
   * 
   * @example
   * example
   */
  attachments?: PauseWorkItemResponseBodyAttachments[];
  /**
   * @remarks
   * The business status (seven states).
   * 
   * @example
   * PROCESSING
   */
  businessStatus?: string;
  /**
   * @remarks
   * Specifies whether the caller can delete the item.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Specifies whether the caller can manage the item.
   * 
   * @example
   * false
   */
  canManage?: boolean;
  /**
   * @remarks
   * Specifies whether the visibility scope can be adjusted independently.
   * 
   * @example
   * false
   */
  canManageVisibility?: boolean;
  /**
   * @remarks
   * Specifies whether the caller can rename the item.
   * 
   * @example
   * false
   */
  canRename?: boolean;
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
   * The collaboration space ID.
   * 
   * @example
   * example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The list of user IDs of collaborators.
   * 
   * @example
   * example
   */
  collaboratorUserIds?: number[];
  /**
   * @remarks
   * The associated conversation ID.
   * 
   * @example
   * example
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time (ISO8601).
   * 
   * @example
   * example
   */
  createdAt?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 1
   */
  createdByUserId?: number;
  /**
   * @remarks
   * The creation source. Valid values: DEFAULT and TASK.
   * 
   * @example
   * DEFAULT
   */
  creationType?: string;
  /**
   * @remarks
   * The current physical plan ID.
   * 
   * @example
   * example
   */
  currentPlanId?: string;
  /**
   * @remarks
   * The current revision number.
   * 
   * @example
   * 1
   */
  currentRevision?: number;
  /**
   * @remarks
   * The current run ID.
   * 
   * @example
   * example
   */
  currentRunId?: string;
  /**
   * @remarks
   * The current run sequence number.
   * 
   * @example
   * 1
   */
  currentRunSeq?: number;
  /**
   * @remarks
   * The current step name.
   * 
   * @example
   * example
   */
  currentStepName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The input snapshot version.
   * 
   * @example
   * 1
   */
  inputVersion?: number;
  /**
   * @remarks
   * The work item type.
   * 
   * @example
   * WORKFLOW
   */
  itemType?: string;
  /**
   * @remarks
   * The time when the item last entered the processing state (ISO8601).
   * 
   * @example
   * example
   */
  lastProcessingAt?: string;
  /**
   * @remarks
   * Specifies whether the topic is a free exploration topic during the compatibility period.
   * 
   * @example
   * false
   */
  legacyTopic?: boolean;
  /**
   * @remarks
   * The list of user IDs of visible members.
   * 
   * @example
   * example
   */
  memberUserIds?: number[];
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
   * The modification time (ISO8601).
   * 
   * @example
   * example
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The personal pinning status for the caller.
   * 
   * @example
   * false
   */
  pinned?: boolean;
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
   * The completed progress.
   * 
   * @example
   * 1
   */
  progressCompleted?: number;
  /**
   * @remarks
   * The total progress.
   * 
   * @example
   * 1
   */
  progressTotal?: number;
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
   * The execution ID of the task.
   * 
   * @example
   * example
   */
  sourceExecutionId?: string;
  /**
   * @remarks
   * The source ID of the task.
   * 
   * @example
   * example
   */
  sourceTaskId?: string;
  /**
   * @remarks
   * The source name of the task.
   * 
   * @example
   * example
   */
  sourceTaskName?: string;
  /**
   * @remarks
   * The trigger key of the task.
   * 
   * @example
   * example
   */
  sourceTriggerKey?: string;
  /**
   * @remarks
   * The source type of the task.
   * 
   * @example
   * example
   */
  sourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * example
   */
  title?: string;
  /**
   * @remarks
   * The time zone when the task is triggered.
   * 
   * @example
   * example
   */
  triggerTimezone?: string;
  /**
   * @remarks
   * The trigger time of the task (ISO8601).
   * 
   * @example
   * example
   */
  triggeredAt?: string;
  /**
   * @remarks
   * The optimistic version number.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The visibility scope.
   * 
   * @example
   * example
   */
  visibility?: string;
  /**
   * @remarks
   * The source of the visibility scope. Valid values: SELF, TASK, and TEMPLATE.
   * 
   * @example
   * SELF
   */
  visibilitySource?: string;
  /**
   * @remarks
   * The work item ID.
   * 
   * @example
   * example
   */
  workItemId?: string;
  /**
   * @remarks
   * The workflow status projection (four states).
   * 
   * @example
   * example
   */
  workflowStatus?: string;
  /**
   * @remarks
   * The list of IDs of bound workflow templates.
   * 
   * @example
   * example
   */
  workflowTemplateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      appliedStatusVersion: 'appliedStatusVersion',
      attachments: 'attachments',
      businessStatus: 'businessStatus',
      canDelete: 'canDelete',
      canManage: 'canManage',
      canManageVisibility: 'canManageVisibility',
      canRename: 'canRename',
      code: 'code',
      collaborationGroupId: 'collaborationGroupId',
      collaboratorUserIds: 'collaboratorUserIds',
      conversationId: 'conversationId',
      createdAt: 'createdAt',
      createdByUserId: 'createdByUserId',
      creationType: 'creationType',
      currentPlanId: 'currentPlanId',
      currentRevision: 'currentRevision',
      currentRunId: 'currentRunId',
      currentRunSeq: 'currentRunSeq',
      currentStepName: 'currentStepName',
      description: 'description',
      inputVersion: 'inputVersion',
      itemType: 'itemType',
      lastProcessingAt: 'lastProcessingAt',
      legacyTopic: 'legacyTopic',
      memberUserIds: 'memberUserIds',
      message: 'message',
      modifiedAt: 'modifiedAt',
      ownerUserId: 'ownerUserId',
      pinned: 'pinned',
      priority: 'priority',
      progressCompleted: 'progressCompleted',
      progressTotal: 'progressTotal',
      requestId: 'requestId',
      sourceExecutionId: 'sourceExecutionId',
      sourceTaskId: 'sourceTaskId',
      sourceTaskName: 'sourceTaskName',
      sourceTriggerKey: 'sourceTriggerKey',
      sourceType: 'sourceType',
      title: 'title',
      triggerTimezone: 'triggerTimezone',
      triggeredAt: 'triggeredAt',
      version: 'version',
      visibility: 'visibility',
      visibilitySource: 'visibilitySource',
      workItemId: 'workItemId',
      workflowStatus: 'workflowStatus',
      workflowTemplateIds: 'workflowTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptanceCriteria: 'string',
      appliedStatusVersion: 'number',
      attachments: { 'type': 'array', 'itemType': PauseWorkItemResponseBodyAttachments },
      businessStatus: 'string',
      canDelete: 'boolean',
      canManage: 'boolean',
      canManageVisibility: 'boolean',
      canRename: 'boolean',
      code: 'string',
      collaborationGroupId: 'string',
      collaboratorUserIds: { 'type': 'array', 'itemType': 'number' },
      conversationId: 'string',
      createdAt: 'string',
      createdByUserId: 'number',
      creationType: 'string',
      currentPlanId: 'string',
      currentRevision: 'number',
      currentRunId: 'string',
      currentRunSeq: 'number',
      currentStepName: 'string',
      description: 'string',
      inputVersion: 'number',
      itemType: 'string',
      lastProcessingAt: 'string',
      legacyTopic: 'boolean',
      memberUserIds: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      modifiedAt: 'string',
      ownerUserId: 'number',
      pinned: 'boolean',
      priority: 'string',
      progressCompleted: 'number',
      progressTotal: 'number',
      requestId: 'string',
      sourceExecutionId: 'string',
      sourceTaskId: 'string',
      sourceTaskName: 'string',
      sourceTriggerKey: 'string',
      sourceType: 'string',
      title: 'string',
      triggerTimezone: 'string',
      triggeredAt: 'string',
      version: 'number',
      visibility: 'string',
      visibilitySource: 'string',
      workItemId: 'string',
      workflowStatus: 'string',
      workflowTemplateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    if(Array.isArray(this.collaboratorUserIds)) {
      $dara.Model.validateArray(this.collaboratorUserIds);
    }
    if(Array.isArray(this.memberUserIds)) {
      $dara.Model.validateArray(this.memberUserIds);
    }
    if(Array.isArray(this.workflowTemplateIds)) {
      $dara.Model.validateArray(this.workflowTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

