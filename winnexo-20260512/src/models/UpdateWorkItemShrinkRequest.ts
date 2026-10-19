// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkItemShrinkRequest extends $dara.Model {
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
  attachmentsShrink?: string;
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
  collaboratorUserIdsShrink?: string;
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
  workflowTemplateIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      attachmentsShrink: 'attachments',
      collaborationGroupId: 'collaborationGroupId',
      collaboratorUserIdsShrink: 'collaboratorUserIds',
      conversationId: 'conversationId',
      description: 'description',
      expectedVersion: 'expectedVersion',
      ownerUserId: 'ownerUserId',
      priority: 'priority',
      tenantId: 'tenantId',
      title: 'title',
      workItemId: 'workItemId',
      workflowTemplateIdsShrink: 'workflowTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptanceCriteria: 'string',
      attachmentsShrink: 'string',
      collaborationGroupId: 'string',
      collaboratorUserIdsShrink: 'string',
      conversationId: 'string',
      description: 'string',
      expectedVersion: 'number',
      ownerUserId: 'number',
      priority: 'string',
      tenantId: 'string',
      title: 'string',
      workItemId: 'string',
      workflowTemplateIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

