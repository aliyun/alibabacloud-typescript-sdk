// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkItemRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The reference URL of the attachment.
   * 
   * @example
   * example
   */
  refUrl?: string;
  /**
   * @remarks
   * The resource ID of the attachment.
   * 
   * This parameter is required.
   * 
   * @example
   * res_example
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type of the attachment.
   * 
   * This parameter is required.
   * 
   * @example
   * attachment
   */
  resourceKind?: string;
  /**
   * @remarks
   * The size of the attachment in bytes. The maximum size is 20 MB.
   * 
   * @example
   * 1024
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The title of the attachment.
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
  attachments?: UpdateWorkItemRequestAttachments[];
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
  collaboratorUserIds?: number[];
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

