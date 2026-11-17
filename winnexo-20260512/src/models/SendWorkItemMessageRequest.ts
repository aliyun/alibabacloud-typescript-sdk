// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendWorkItemMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration space.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The body of the user message. The value cannot be empty and can be up to 32,768 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Compile a list of next steps based on the previous discussion
   */
  content?: string;
  /**
   * @remarks
   * The conversation ID returned by the API operation for creating a free exploration. You must specify at least one of this parameter and workItemId. If both are specified, they must match.
   * 
   * @example
   * 01234567-89ab-4def-8123-456789abcdef
   */
  conversationId?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the free exploration work item. This parameter is compatible with the legacy-topic:<conversationId> format. You must specify at least one of workItemId and conversationId. If both are specified, they must point to the same session.
   * 
   * @example
   * wi_0123456789abcdef0123456789abcdef
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      content: 'content',
      conversationId: 'conversationId',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      content: 'string',
      conversationId: 'string',
      tenantId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

