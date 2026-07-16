// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceAccountResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The type of missing permission.
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

export class DeleteServiceAccountResponseBodyData extends $dara.Model {
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
   * Indicates whether the import task is successful.
   * 
   * @example
   * fase
   */
  deleted?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E5DCFFC-A00D-****-836E-73318F8CA577
   */
  requestId?: string;
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
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ******
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      deleted: 'Deleted',
      requestId: 'RequestId',
      serviceAccountType: 'ServiceAccountType',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      deleted: 'boolean',
      requestId: 'string',
      serviceAccountType: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DeleteServiceAccountResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: DeleteServiceAccountResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
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
      accessDeniedDetail: DeleteServiceAccountResponseBodyAccessDeniedDetail,
      data: DeleteServiceAccountResponseBodyData,
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

