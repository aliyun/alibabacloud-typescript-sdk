// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceAccountResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The type of the permission denial.
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
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
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

export class DescribeServiceAccountResponseBodyDataServiceAccounts extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * polardbx_meta_ro
   */
  accountName?: string;
  /**
   * @remarks
   * The time when the account was created.
   * 
   * @example
   * 2023-07-21T14:17:25+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The service account type.
   * 
   * @example
   * METADATA_READONLY
   */
  serviceAccountType?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * - **0**: Backing up.
   * - **1**: Backup succeeded.
   * - **2**: Backup failed.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      createdTime: 'CreatedTime',
      serviceAccountType: 'ServiceAccountType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      createdTime: 'string',
      serviceAccountType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The service account in the list.
   */
  serviceAccounts?: DescribeServiceAccountResponseBodyDataServiceAccounts[];
  static names(): { [key: string]: string } {
    return {
      serviceAccounts: 'ServiceAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAccounts: { 'type': 'array', 'itemType': DescribeServiceAccountResponseBodyDataServiceAccounts },
    };
  }

  validate() {
    if(Array.isArray(this.serviceAccounts)) {
      $dara.Model.validateArray(this.serviceAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeServiceAccountResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The instance details.
   */
  data?: DescribeServiceAccountResponseBodyData;
  /**
   * @remarks
   * The response message. "success" is returned if the request was successful. Otherwise, the corresponding error code is returned.
   * 
   * @example
   * ****
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeServiceAccountResponseBodyAccessDeniedDetail,
      data: DescribeServiceAccountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

