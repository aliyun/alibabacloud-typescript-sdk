// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemResponseBodyAttachments extends $dara.Model {
  /**
   * @remarks
   * 附件ID
   * 
   * @example
   * example
   */
  attachmentId?: string;
  /**
   * @remarks
   * 内容类型
   * 
   * @example
   * example
   */
  contentType?: string;
  /**
   * @remarks
   * 附件访问入口（OpenAPI 302 前置）
   * 
   * @example
   * example
   */
  refUrl?: string;
  /**
   * @remarks
   * 附件资源ID
   * 
   * @example
   * example
   */
  resourceId?: string;
  /**
   * @remarks
   * 附件资源类型
   * 
   * @example
   * example
   */
  resourceKind?: string;
  /**
   * @remarks
   * 附件大小(字节)
   * 
   * @example
   * 1
   */
  sizeBytes?: number;
  /**
   * @remarks
   * 附件标题
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

export class GetWorkItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * 验收标准
   * 
   * @example
   * example
   */
  acceptanceCriteria?: string;
  /**
   * @remarks
   * 已应用的状态版本
   * 
   * @example
   * 1
   */
  appliedStatusVersion?: number;
  /**
   * @remarks
   * 输入附件列表
   * 
   * @example
   * example
   */
  attachments?: GetWorkItemResponseBodyAttachments[];
  /**
   * @remarks
   * 业务状态（七态）
   * 
   * @example
   * PROCESSING
   */
  businessStatus?: string;
  /**
   * @remarks
   * 调用者是否可删除
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * 调用者是否可管理
   * 
   * @example
   * false
   */
  canManage?: boolean;
  /**
   * @remarks
   * 是否可独立调整可见范围
   * 
   * @example
   * false
   */
  canManageVisibility?: boolean;
  /**
   * @remarks
   * 调用者是否可重命名
   * 
   * @example
   * false
   */
  canRename?: boolean;
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 协作空间ID
   * 
   * @example
   * example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 协作人用户ID列表
   * 
   * @example
   * example
   */
  collaboratorUserIds?: number[];
  /**
   * @remarks
   * 关联会话ID
   * 
   * @example
   * example
   */
  conversationId?: string;
  /**
   * @remarks
   * 创建时间(ISO8601)
   * 
   * @example
   * example
   */
  createdAt?: string;
  /**
   * @remarks
   * 创建人用户ID
   * 
   * @example
   * 1
   */
  createdByUserId?: number;
  /**
   * @remarks
   * 创建来源：DEFAULT/TASK
   * 
   * @example
   * DEFAULT
   */
  creationType?: string;
  /**
   * @remarks
   * 当前物理计划ID
   * 
   * @example
   * example
   */
  currentPlanId?: string;
  /**
   * @remarks
   * 当前修订号
   * 
   * @example
   * 1
   */
  currentRevision?: number;
  /**
   * @remarks
   * 当前运行ID
   * 
   * @example
   * example
   */
  currentRunId?: string;
  /**
   * @remarks
   * 当前运行序号
   * 
   * @example
   * 1
   */
  currentRunSeq?: number;
  /**
   * @remarks
   * 当前步骤名称
   * 
   * @example
   * example
   */
  currentStepName?: string;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * 输入快照版本
   * 
   * @example
   * 1
   */
  inputVersion?: number;
  /**
   * @remarks
   * 工作项类型
   * 
   * @example
   * WORKFLOW
   */
  itemType?: string;
  /**
   * @remarks
   * 最近进入处理中的时间(ISO8601)
   * 
   * @example
   * example
   */
  lastProcessingAt?: string;
  /**
   * @remarks
   * 是否为兼容期自由探索话题
   * 
   * @example
   * false
   */
  legacyTopic?: boolean;
  /**
   * @remarks
   * 可见成员用户ID列表
   * 
   * @example
   * example
   */
  memberUserIds?: number[];
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 修改时间(ISO8601)
   * 
   * @example
   * example
   */
  modifiedAt?: string;
  /**
   * @remarks
   * 负责人用户ID
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * 调用者个人置顶状态
   * 
   * @example
   * false
   */
  pinned?: boolean;
  /**
   * @remarks
   * 优先级
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * 已完成进度
   * 
   * @example
   * 1
   */
  progressCompleted?: number;
  /**
   * @remarks
   * 总进度
   * 
   * @example
   * 1
   */
  progressTotal?: number;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 任务执行ID
   * 
   * @example
   * example
   */
  sourceExecutionId?: string;
  /**
   * @remarks
   * 任务来源ID
   * 
   * @example
   * example
   */
  sourceTaskId?: string;
  /**
   * @remarks
   * 任务来源名称
   * 
   * @example
   * example
   */
  sourceTaskName?: string;
  /**
   * @remarks
   * 任务触发键
   * 
   * @example
   * example
   */
  sourceTriggerKey?: string;
  /**
   * @remarks
   * 任务来源类型
   * 
   * @example
   * example
   */
  sourceType?: string;
  /**
   * @remarks
   * 标题
   * 
   * @example
   * example
   */
  title?: string;
  /**
   * @remarks
   * 任务触发时区
   * 
   * @example
   * example
   */
  triggerTimezone?: string;
  /**
   * @remarks
   * 任务触发时间(ISO8601)
   * 
   * @example
   * example
   */
  triggeredAt?: string;
  /**
   * @remarks
   * 乐观版本号
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * 可见范围
   * 
   * @example
   * example
   */
  visibility?: string;
  /**
   * @remarks
   * 可见范围来源：SELF/TASK/TEMPLATE
   * 
   * @example
   * SELF
   */
  visibilitySource?: string;
  /**
   * @remarks
   * 工作项ID
   * 
   * @example
   * example
   */
  workItemId?: string;
  /**
   * @remarks
   * Workflow四态投影
   * 
   * @example
   * example
   */
  workflowStatus?: string;
  /**
   * @remarks
   * 绑定的工作流模板ID列表
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
      attachments: { 'type': 'array', 'itemType': GetWorkItemResponseBodyAttachments },
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

