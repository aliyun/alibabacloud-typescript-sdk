// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOrgRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the organization.
   * 
   * This parameter is required.
   * 
   * @example
   * org-76joc57khvnhdh***
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * This parameter is required.
   */
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

