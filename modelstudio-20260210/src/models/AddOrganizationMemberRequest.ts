// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrganizationMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The display name. If this parameter is not empty, the name field of the account is updated synchronously.
   * 
   * This parameter is required.
   * 
   * @example
   * Account name
   */
  accountName?: string;
  /**
   * @remarks
   * The organization role code. Valid values: ORG_ADMIN and ORG_MEMBER. Default value: ORG_MEMBER.
   * 
   * This parameter is required.
   * 
   * @example
   * ORG_MEMBER
   */
  orgRoleCode?: string;
  /**
   * @remarks
   * The seat specification. Valid values:
   * - standard: Standard seat.
   * - pro: Pro seat.
   * - max: Premium seat.
   * 
   * @example
   * standard
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      orgRoleCode: 'OrgRoleCode',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      orgRoleCode: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

