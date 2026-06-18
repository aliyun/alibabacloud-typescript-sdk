// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveOrgRequest extends $dara.Model {
  /**
   * @remarks
   * Channel
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * org-5yy5icj981xe5****
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

