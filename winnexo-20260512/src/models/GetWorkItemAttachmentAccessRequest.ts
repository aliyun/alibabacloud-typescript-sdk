// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemAttachmentAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The attachment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  attachmentId?: string;
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
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
   * The work item ID.
   * 
   * This parameter is required.
   * 
   * @example
   * wi_example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'attachmentId',
      collaborationGroupId: 'collaborationGroupId',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      collaborationGroupId: 'string',
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

