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
   * 账号名称
   */
  accountName?: string;
  /**
   * @remarks
   * The organization role code. Only ORG_ADMIN or ORG_MEMBER is allowed. Default value: ORG_MEMBER.
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
   * 
   * - standard: standard seat.
   * - pro: premium seat.
   * - max: exclusive seat.
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

