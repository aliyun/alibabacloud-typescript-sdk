// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkItemRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * 内容类型
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * 附件引用地址
   * 
   * @example
   * example
   */
  refUrl?: string;
  /**
   * @remarks
   * 附件资源ID
   * 
   * This parameter is required.
   * 
   * @example
   * res_example
   */
  resourceId?: string;
  /**
   * @remarks
   * 附件资源类型
   * 
   * This parameter is required.
   * 
   * @example
   * attachment
   */
  resourceKind?: string;
  /**
   * @remarks
   * 附件大小(字节)，上限 20MB
   * 
   * @example
   * 1024
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

export class UpdateWorkItemRequest extends $dara.Model {
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
   * 输入附件稳定引用
   * 
   * @example
   * example
   */
  attachments?: UpdateWorkItemRequestAttachments[];
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
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
   * 工作项描述
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * 乐观版本号，取上次响应的 version
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  expectedVersion?: number;
  /**
   * @remarks
   * 负责人用户ID；缺省为调用者本人
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * 排产优先级
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 工作项标题
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  title?: string;
  /**
   * @remarks
   * 工作项 ID
   * 
   * This parameter is required.
   * 
   * @example
   * wi_example
   */
  workItemId?: string;
  /**
   * @remarks
   * 绑定的工作流模板ID列表；未传保持既有绑定，空数组清空
   * 
   * @example
   * example
   */
  workflowTemplateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      attachments: 'attachments',
      collaborationGroupId: 'collaborationGroupId',
      collaboratorUserIds: 'collaboratorUserIds',
      conversationId: 'conversationId',
      description: 'description',
      expectedVersion: 'expectedVersion',
      ownerUserId: 'ownerUserId',
      priority: 'priority',
      tenantId: 'tenantId',
      title: 'title',
      workItemId: 'workItemId',
      workflowTemplateIds: 'workflowTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptanceCriteria: 'string',
      attachments: { 'type': 'array', 'itemType': UpdateWorkItemRequestAttachments },
      collaborationGroupId: 'string',
      collaboratorUserIds: { 'type': 'array', 'itemType': 'number' },
      conversationId: 'string',
      description: 'string',
      expectedVersion: 'number',
      ownerUserId: 'number',
      priority: 'string',
      tenantId: 'string',
      title: 'string',
      workItemId: 'string',
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
    if(Array.isArray(this.workflowTemplateIds)) {
      $dara.Model.validateArray(this.workflowTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

