// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * This parameter is required.
   */
  orgName?: string;
  /**
   * @remarks
   * The ID of the parent organization.
   * 
   * This parameter is required.
   * 
   * @example
   * org-evk12ozjvmlxl****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

