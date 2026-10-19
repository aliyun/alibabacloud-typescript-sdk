// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkItemRequestAttachments extends $dara.Model {
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

export class CreateWorkItemRequest extends $dara.Model {
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
  attachments?: CreateWorkItemRequestAttachments[];
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
   * 工作项类型；仅接受 WORKFLOW
   * 
   * This parameter is required.
   * 
   * @example
   * WORKFLOW
   */
  itemType?: string;
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
   * 绑定的工作流模板ID列表
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
      itemType: 'itemType',
      ownerUserId: 'ownerUserId',
      priority: 'priority',
      tenantId: 'tenantId',
      title: 'title',
      workflowTemplateIds: 'workflowTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptanceCriteria: 'string',
      attachments: { 'type': 'array', 'itemType': CreateWorkItemRequestAttachments },
      collaborationGroupId: 'string',
      collaboratorUserIds: { 'type': 'array', 'itemType': 'number' },
      conversationId: 'string',
      description: 'string',
      itemType: 'string',
      ownerUserId: 'number',
      priority: 'string',
      tenantId: 'string',
      title: 'string',
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

