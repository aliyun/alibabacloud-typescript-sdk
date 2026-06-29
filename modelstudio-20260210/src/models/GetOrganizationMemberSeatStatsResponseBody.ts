// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrganizationMemberSeatStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of administrators (ORG_ADMIN role).
   * 
   * @example
   * 3
   */
  adminRoleUserCount?: number;
  /**
   * @remarks
   * The number of regular members (ORG_MEMBER role).
   * 
   * @example
   * 8
   */
  memberRoleUserCount?: number;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 5ffd468b1e45db3c1cc26ad6
   */
  orgId?: string;
  /**
   * @remarks
   * The number of owner accounts (ORG_OWNER role).
   * 
   * @example
   * 1
   */
  ownerRoleUserCount?: number;
  /**
   * @remarks
   * The number of members with assigned seats.
   * 
   * @example
   * 2
   */
  seatedMemberCount?: number;
  /**
   * @remarks
   * The total number of members.
   * 
   * @example
   * 12
   */
  totalMemberCount?: number;
  /**
   * @remarks
   * The number of members without assigned seats.
   * 
   * @example
   * 10
   */
  unseatedMemberCount?: number;
  static names(): { [key: string]: string } {
    return {
      adminRoleUserCount: 'AdminRoleUserCount',
      memberRoleUserCount: 'MemberRoleUserCount',
      orgId: 'OrgId',
      ownerRoleUserCount: 'OwnerRoleUserCount',
      seatedMemberCount: 'SeatedMemberCount',
      totalMemberCount: 'TotalMemberCount',
      unseatedMemberCount: 'UnseatedMemberCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminRoleUserCount: 'number',
      memberRoleUserCount: 'number',
      orgId: 'string',
      ownerRoleUserCount: 'number',
      seatedMemberCount: 'number',
      totalMemberCount: 'number',
      unseatedMemberCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

