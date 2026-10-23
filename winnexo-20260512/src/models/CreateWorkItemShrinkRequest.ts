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
   * The stable references of the input attachments.
   * 
   * @example
   * example
   */
  attachmentsShrink?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace.
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
   * example
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
   * The type of the work item. Only WORKFLOW is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * WORKFLOW
   */
  itemType?: string;
  /**
   * @remarks
   * The user ID of the owner. If this parameter is not specified, the ID of the caller is used.
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
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
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

