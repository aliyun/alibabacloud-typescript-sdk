// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkItemShrinkRequest extends $dara.Model {
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
   * The stable references for the attachments.
   * 
   * @example
   * example
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
   * The optimistic version number. Obtain this value from the version field in the previous response.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The user ID of the owner. If not specified, the user ID of the caller is used.
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
   * The ID of the work item.
   * 
   * This parameter is required.
   * 
   * @example
   * wi_example
   */
  workItemId?: string;
  /**
   * @remarks
   * The list of bound workflow template IDs. If not specified, the existing bindings are retained. If an empty array is provided, the bindings are cleared.
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

