// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
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
   * wi_0123456789ab4cde
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

