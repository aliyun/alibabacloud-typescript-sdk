// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgRequest extends $dara.Model {
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
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

