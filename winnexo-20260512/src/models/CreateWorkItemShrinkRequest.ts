// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkItemShrinkRequest extends $dara.Model {
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
  workflowTemplateIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      attachmentsShrink: 'attachments',
      collaborationGroupId: 'collaborationGroupId',
      collaboratorUserIdsShrink: 'collaboratorUserIds',
      conversationId: 'conversationId',
      description: 'description',
      itemType: 'itemType',
      ownerUserId: 'ownerUserId',
      priority: 'priority',
      tenantId: 'tenantId',
      title: 'title',
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
      itemType: 'string',
      ownerUserId: 'number',
      priority: 'string',
      tenantId: 'string',
      title: 'string',
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

