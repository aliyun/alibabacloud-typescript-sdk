// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationMemberRequest extends $dara.Model {
  accountIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ORG_MEMBER
   */
  newRoleCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      newRoleCode: 'NewRoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      newRoleCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

