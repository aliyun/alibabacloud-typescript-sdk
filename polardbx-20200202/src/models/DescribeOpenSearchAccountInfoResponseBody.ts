// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchAccountInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The authentication principal type.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The diagnostic information.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * NoPermissionType
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchAccountInfoResponseBodyDataAccounts extends $dara.Model {
  /**
   * @remarks
   * The account status. Valid values: 
   * 
   * - **Creating**: The account is being created.
   * - **Available**: The account is available.
   * - **Deleting**: The account is being deleted.
   * 
   * @example
   * 1
   */
  accountStatus?: string;
  /**
   * @remarks
   * The account type.
   * 
   * - Before three-role mode is enabled: 0 indicates a standard account, and 1 indicates a privileged account.
   * - After three-role mode is enabled: 0 indicates a standard account, 2 indicates a system administrator account, 3 indicates a security administrator account, and 4 indicates an audit administrator account.
   * 
   * @example
   * 2,3,4
   */
  accountType?: string;
  /**
   * @remarks
   * The account name of the OpenSearch instance.
   * 
   * @example
   * elastic
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchAccountInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of accounts.
   */
  accounts?: DescribeOpenSearchAccountInfoResponseBodyDataAccounts[];
  /**
   * @remarks
   * The time when the password was last modified.
   * 
   * @example
   * 2026-08-21T12:00:00Z
   */
  passwordLastModified?: string;
  /**
   * @remarks
   * The account name of the OpenSearch instance.
   * 
   * @example
   * elastic
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      passwordLastModified: 'PasswordLastModified',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeOpenSearchAccountInfoResponseBodyDataAccounts },
      passwordLastModified: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchAccountInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchAccountInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeOpenSearchAccountInfoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeOpenSearchAccountInfoResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchAccountInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

