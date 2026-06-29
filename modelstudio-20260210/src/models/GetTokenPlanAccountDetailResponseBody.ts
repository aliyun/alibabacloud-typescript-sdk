// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenPlanAccountDetailResponseBodyDataOrgMembershipsWorkspaces extends $dara.Model {
  /**
   * @remarks
   * The member status. Valid values:
   * - ACTIVE 
   * - FROZEN
   * 
   * @example
   * ACTIVE
   */
  memberStatus?: string;
  /**
   * @remarks
   * The workspace role code. Valid values:
   * - WS_ADMIN
   * - WS_MEMBER
   * 
   * @example
   * WS_ADMIN
   */
  roleCode?: string;
  /**
   * @remarks
   * The workspace role ID.
   * 
   * @example
   * SYSTEM_ROLE_WS_ADMIN
   */
  roleId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_123456789
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      memberStatus: 'MemberStatus',
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberStatus: 'string',
      roleCode: 'string',
      roleId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenPlanAccountDetailResponseBodyDataOrgMemberships extends $dara.Model {
  /**
   * @remarks
   * The organization member status. Valid values:
   * 
   * - ACTIVE 
   * - INITIAL 
   * - FROZEN
   * 
   * @example
   * ENABLE
   */
  memberStatus?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org_123456789
   */
  orgId?: string;
  /**
   * @remarks
   * The organization role code. Valid values:
   * 
   * - ORG_OWNER
   * - ORG_ADMIN
   * - ORG_MEMBER
   * 
   * @example
   * ORG_MEMBER
   */
  roleCode?: string;
  /**
   * @remarks
   * The organization role ID.
   * 
   * @example
   * SYSTEM_ROLE_ORG_OWNER
   */
  roleId?: string;
  /**
   * @remarks
   * The list of workspaces that the account has joined under the organization.
   */
  workspaces?: GetTokenPlanAccountDetailResponseBodyDataOrgMembershipsWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      memberStatus: 'MemberStatus',
      orgId: 'OrgId',
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberStatus: 'string',
      orgId: 'string',
      roleCode: 'string',
      roleId: 'string',
      workspaces: { 'type': 'array', 'itemType': GetTokenPlanAccountDetailResponseBodyDataOrgMembershipsWorkspaces },
    };
  }

  validate() {
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenPlanAccountDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * - ALIYUN 
   * - SSO 
   * - SA
   * 
   * @example
   * ALIYUN
   */
  accountType?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID. This parameter applies only to accounts of the ALIYUN type.
   * 
   * @example
   * 1122334455
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The time when the account was created.
   * 
   * @example
   * Thu May 28 14:33:52 CST 2026
   */
  createdAt?: string;
  /**
   * @remarks
   * The email address. This parameter applies only to accounts of the SSO type.
   * 
   * @example
   * test@email.com
   */
  email?: string;
  /**
   * @remarks
   * The global status of the account. A value of 0 indicates Normal. A value of 1 indicates Frozen.
   * 
   * @example
   * 0
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * The list of organization memberships in a tree structure (organization → workspace).
   */
  orgMemberships?: GetTokenPlanAccountDetailResponseBodyDataOrgMemberships[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      aliyunUid: 'AliyunUid',
      createdAt: 'CreatedAt',
      email: 'Email',
      isDeleted: 'IsDeleted',
      name: 'Name',
      orgMemberships: 'OrgMemberships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      aliyunUid: 'string',
      createdAt: 'string',
      email: 'string',
      isDeleted: 'boolean',
      name: 'string',
      orgMemberships: { 'type': 'array', 'itemType': GetTokenPlanAccountDetailResponseBodyDataOrgMemberships },
    };
  }

  validate() {
    if(Array.isArray(this.orgMemberships)) {
      $dara.Model.validateArray(this.orgMemberships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenPlanAccountDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetTokenPlanAccountDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * C0DC05D9-C506-519B-AFF3-2B00165176E4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTokenPlanAccountDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

