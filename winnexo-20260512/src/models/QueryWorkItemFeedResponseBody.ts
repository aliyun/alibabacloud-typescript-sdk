// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkItemFeedResponseBodyEntriesItemAttachments extends $dara.Model {
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
   * The access URL of the attachment (prefixed with an OpenAPI 302 redirect).
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
   * The attachment size in bytes.
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

export class QueryWorkItemFeedResponseBodyEntriesItem extends $dara.Model {
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
  attachments?: QueryWorkItemFeedResponseBodyEntriesItemAttachments[];
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
   * Indicates whether the caller can delete the item.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the caller can manage the item.
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
   * Indicates whether the caller can rename the item.
   * 
   * @example
   * false
   */
  canRename?: boolean;
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * @example
   * example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The list of user IDs of the collaborators.
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
   * The time when the item last entered the processing state, in ISO 8601 format.
   * 
   * @example
   * example
   */
  lastProcessingAt?: string;
  /**
   * @remarks
   * Indicates whether the topic is a free exploration topic during the compatibility period.
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
   * The modification time, in ISO 8601 format.
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
   * The pinned status for the caller.
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
   * The time zone when the task is triggered.
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
      modifiedAt: 'modifiedAt',
      ownerUserId: 'ownerUserId',
      pinned: 'pinned',
      priority: 'priority',
      progressCompleted: 'progressCompleted',
      progressTotal: 'progressTotal',
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
      attachments: { 'type': 'array', 'itemType': QueryWorkItemFeedResponseBodyEntriesItemAttachments },
      businessStatus: 'string',
      canDelete: 'boolean',
      canManage: 'boolean',
      canManageVisibility: 'boolean',
      canRename: 'boolean',
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
      modifiedAt: 'string',
      ownerUserId: 'number',
      pinned: 'boolean',
      priority: 'string',
      progressCompleted: 'number',
      progressTotal: 'number',
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

export class QueryWorkItemFeedResponseBodyEntriesItemsAttachments extends $dara.Model {
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
   * The access URL of the attachment (prefixed with an OpenAPI 302 redirect).
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
   * The attachment size in bytes.
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

export class QueryWorkItemFeedResponseBodyEntriesItems extends $dara.Model {
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
  attachments?: QueryWorkItemFeedResponseBodyEntriesItemsAttachments[];
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
   * Indicates whether the caller can delete the item.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the caller can manage the item.
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
   * Indicates whether the caller can rename the item.
   * 
   * @example
   * false
   */
  canRename?: boolean;
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * @example
   * example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The list of user IDs of the collaborators.
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
   * The time when the item last entered the processing state, in ISO 8601 format.
   * 
   * @example
   * example
   */
  lastProcessingAt?: string;
  /**
   * @remarks
   * Indicates whether the topic is a free exploration topic during the compatibility period.
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
   * The modification time, in ISO 8601 format.
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
   * The pinned status for the caller.
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
   * The time zone when the task is triggered.
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
      modifiedAt: 'modifiedAt',
      ownerUserId: 'ownerUserId',
      pinned: 'pinned',
      priority: 'priority',
      progressCompleted: 'progressCompleted',
      progressTotal: 'progressTotal',
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
      attachments: { 'type': 'array', 'itemType': QueryWorkItemFeedResponseBodyEntriesItemsAttachments },
      businessStatus: 'string',
      canDelete: 'boolean',
      canManage: 'boolean',
      canManageVisibility: 'boolean',
      canRename: 'boolean',
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
      modifiedAt: 'string',
      ownerUserId: 'number',
      pinned: 'boolean',
      priority: 'string',
      progressCompleted: 'number',
      progressTotal: 'number',
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

export class QueryWorkItemFeedResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The entry type.
   * 
   * @example
   * WORK_ITEM
   */
  entryType?: string;
  /**
   * @remarks
   * Indicates whether more child items are available.
   * 
   * @example
   * false
   */
  hasMoreChildren?: boolean;
  /**
   * @remarks
   * The content of a regular work item row.
   * 
   * @example
   * example
   */
  item?: QueryWorkItemFeedResponseBodyEntriesItem;
  /**
   * @remarks
   * The latest five work items in the task aggregation row.
   * 
   * @example
   * example
   */
  items?: QueryWorkItemFeedResponseBodyEntriesItems[];
  /**
   * @remarks
   * The time of the latest work item, in ISO 8601 format.
   * 
   * @example
   * example
   */
  latestWorkItemAt?: string;
  /**
   * @remarks
   * The total number of matched work items.
   * 
   * @example
   * 1
   */
  matchedWorkItemCount?: number;
  /**
   * @remarks
   * The source task ID.
   * 
   * @example
   * example
   */
  sourceTaskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * example
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      entryType: 'entryType',
      hasMoreChildren: 'hasMoreChildren',
      item: 'item',
      items: 'items',
      latestWorkItemAt: 'latestWorkItemAt',
      matchedWorkItemCount: 'matchedWorkItemCount',
      sourceTaskId: 'sourceTaskId',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryType: 'string',
      hasMoreChildren: 'boolean',
      item: QueryWorkItemFeedResponseBodyEntriesItem,
      items: { 'type': 'array', 'itemType': QueryWorkItemFeedResponseBodyEntriesItems },
      latestWorkItemAt: 'string',
      matchedWorkItemCount: 'number',
      sourceTaskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkItemFeedResponseBody extends $dara.Model {
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
   * The entries on the current page. The entryType determines the effective fields: WORK_ITEM maps to item, and TASK_GROUP maps to aggregation fields.
   * 
   * @example
   * example
   */
  entries?: QueryWorkItemFeedResponseBodyEntries[];
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
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The cursor for the next page.
   * 
   * @example
   * example
   */
  nextCursor?: string;
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
   * The number of items in the visible pool by personal scope.
   * 
   * @example
   * example
   */
  scopeCounts?: { [key: string]: any };
  /**
   * @remarks
   * The number of items in the visible pool by business status.
   * 
   * @example
   * example
   */
  statusCounts?: { [key: string]: any };
  /**
   * @remarks
   * The total number of entries in the visible pool.
   * 
   * @example
   * 1
   */
  totalEntryCount?: number;
  /**
   * @remarks
   * The total number of work items in the visible pool.
   * 
   * @example
   * 1
   */
  totalWorkItemCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      entries: 'entries',
      hasMore: 'hasMore',
      message: 'message',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
      scopeCounts: 'scopeCounts',
      statusCounts: 'statusCounts',
      totalEntryCount: 'totalEntryCount',
      totalWorkItemCount: 'totalWorkItemCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      entries: { 'type': 'array', 'itemType': QueryWorkItemFeedResponseBodyEntries },
      hasMore: 'boolean',
      message: 'string',
      nextCursor: 'string',
      requestId: 'string',
      scopeCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      statusCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalEntryCount: 'number',
      totalWorkItemCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    if(this.scopeCounts) {
      $dara.Model.validateMap(this.scopeCounts);
    }
    if(this.statusCounts) {
      $dara.Model.validateMap(this.statusCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

