// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeWorkItemResponseBodyAttachments extends $dara.Model {
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
   * The attachment access entry (OpenAPI 302 pre-redirect).
   * 
   * @example
   * example
   */
  refUrl?: string;
  /**
   * @remarks
   * The attachment resource ID.
   * 
   * @example
   * example
   */
  resourceId?: string;
  /**
   * @remarks
   * The attachment resource type.
   * 
   * @example
   * example
   */
  resourceKind?: string;
  /**
   * @remarks
   * The attachment size, in bytes.
   * 
   * @example
   * 1
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The attachment title.
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

export class ResumeWorkItemResponseBody extends $dara.Model {
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
  attachments?: ResumeWorkItemResponseBodyAttachments[];
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
   * Indicates whether the caller can delete this item.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the caller can manage this item.
   * 
   * @example
   * false
   */
  canManage?: boolean;
  /**
   * @remarks
   * Indicates whether the visibility scope can be adjusted independently.
   * 
   * @example
   * false
   */
  canManageVisibility?: boolean;
  /**
   * @remarks
   * Indicates whether the caller can rename this item.
   * 
   * @example
   * false
   */
  canRename?: boolean;
  /**
   * @remarks
   * The business status code. 200 indicates success.
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
   * The list of collaborator user IDs.
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
   * The creation time, in ISO 8601 format.
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
   * The creation source. Valid values: DEFAULT, TASK.
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
   * The most recent time the item entered processing state, in ISO 8601 format.
   * 
   * @example
   * example
   */
  lastProcessingAt?: string;
  /**
   * @remarks
   * Indicates whether this is a legacy free-exploration topic.
   * 
   * @example
   * false
   */
  legacyTopic?: boolean;
  /**
   * @remarks
   * The list of visible member user IDs.
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
   * The modification time, in ISO 8601 format.
   * 
   * @example
   * example
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The owner user ID.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * Indicates whether the caller has pinned this item.
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
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The task execution ID.
   * 
   * @example
   * example
   */
  sourceExecutionId?: string;
  /**
   * @remarks
   * The task source ID.
   * 
   * @example
   * example
   */
  sourceTaskId?: string;
  /**
   * @remarks
   * The task source name.
   * 
   * @example
   * example
   */
  sourceTaskName?: string;
  /**
   * @remarks
   * The task trigger key.
   * 
   * @example
   * example
   */
  sourceTriggerKey?: string;
  /**
   * @remarks
   * The task source type.
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
   * The task trigger time zone.
   * 
   * @example
   * example
   */
  triggerTimezone?: string;
  /**
   * @remarks
   * The task trigger time, in ISO 8601 format.
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
   * The visibility scope source. Valid values: SELF, TASK, TEMPLATE.
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
   * The workflow four-state projection.
   * 
   * @example
   * example
   */
  workflowStatus?: string;
  /**
   * @remarks
   * The list of bound workflow template IDs.
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
      attachments: { 'type': 'array', 'itemType': ResumeWorkItemResponseBodyAttachments },
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

