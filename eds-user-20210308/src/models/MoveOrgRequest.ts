// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveOrgRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent organization.
   * 
   * This parameter is required.
   * 
   * @example
   * org-5yy5icj981xe5****
   */
  newParentOrgId?: string;
  /**
   * @remarks
   * The ID of the organization that you want to move.
   * 
   * This parameter is required.
   * 
   * @example
   * org-5yy5icj981xe5****
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      newParentOrgId: 'NewParentOrgId',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newParentOrgId: 'string',
      orgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

