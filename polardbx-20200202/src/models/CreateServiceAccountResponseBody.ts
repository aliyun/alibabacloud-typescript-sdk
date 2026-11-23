// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceAccountResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * polardbx:CreateServiceAccount
   */
  authAction?: string;
  /**
   * @remarks
   * The type of the authenticated principal.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
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

export class CreateServiceAccountResponseBodyData extends $dara.Model {
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
   * Indicates whether it already exists.
   * 
   * @example
   * False
   */
  alreadyExists?: boolean;
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
   * Service account type
   */
  serviceAccountType?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2209883
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      alreadyExists: 'AlreadyExists',
      requestId: 'RequestId',
      serviceAccountType: 'ServiceAccountType',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      alreadyExists: 'boolean',
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

export class CreateServiceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: CreateServiceAccountResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned policy details.
   */
  data?: CreateServiceAccountResponseBodyData;
  /**
   * @remarks
   * The additional information returned by the API. success is returned for a successful request, and an error code is returned for a failed request.
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
   * 6BA32080EEA
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
      accessDeniedDetail: CreateServiceAccountResponseBodyAccessDeniedDetail,
      data: CreateServiceAccountResponseBodyData,
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

