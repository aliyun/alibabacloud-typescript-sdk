// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkItemShrinkRequest extends $dara.Model {
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
   * The platform application token issued by the console. If specified, the operation is performed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The stable references of the input attachments.
   * 
   * @example
   * [{"resourceKind":"FILE","resourceId":"file_9401","refUrl":"https://files.winnexo.aliyun.com/report.md","title":"Sales Report","contentType":"text/markdown","sizeBytes":2048}]
   */
  attachmentsShrink?: string;
  /**
   * @remarks
   * The ID of the collaboration space.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The list of user IDs of the collaborators.
   * 
   * @example
   * [10001,10002]
   */
  collaboratorUserIdsShrink?: string;
  /**
   * @remarks
   * The ID of the associated conversation.
   * 
   * @example
   * example
   */
  conversationId?: string;
  /**
   * @remarks
   * The description of the work item.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The type of the work item. Only WORKFLOW is accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * WORKFLOW
   */
  itemType?: string;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The user ID of the owner. If not specified, the caller is used as the owner.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The scheduling priority.
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The title of the work item.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  title?: string;
  /**
   * @remarks
   * The list of IDs of the bound workflow templates.
   * 
   * @example
   * ["tpl_9401","tpl_9402"]
   */
  workflowTemplateIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      appToken: 'appToken',
      attachmentsShrink: 'attachments',
      collaborationGroupId: 'collaborationGroupId',
      collaboratorUserIdsShrink: 'collaboratorUserIds',
      conversationId: 'conversationId',
      description: 'description',
      itemType: 'itemType',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
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
      appToken: 'string',
      attachmentsShrink: 'string',
      collaborationGroupId: 'string',
      collaboratorUserIdsShrink: 'string',
      conversationId: 'string',
      description: 'string',
      itemType: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

