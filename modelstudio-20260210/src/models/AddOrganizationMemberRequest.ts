// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrganizationMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The display name. If this parameter is not empty, the name field of the account is also updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 账号名称
   */
  accountName?: string;
  /**
   * @remarks
   * The account information of the TokenPlan management platform.
   * 
   * @example
   * acc_123456789
   */
  callerUacAccountId?: string;
  /**
   * @remarks
   * The product namespace ID. For the TokenPlan product, this field is fixed to namespace-1.
   * 
   * @example
   * namespace-1
   */
  namespaceId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * org_123456789
   */
  orgId?: string;
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
   * The seat specification.
   * 
   * @example
   * standard
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callerUacAccountId: 'CallerUacAccountId',
      namespaceId: 'NamespaceId',
      orgId: 'OrgId',
      orgRoleCode: 'OrgRoleCode',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callerUacAccountId: 'string',
      namespaceId: 'string',
      orgId: 'string',
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

