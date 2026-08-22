// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetOpenSearchPasswordResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The type of the authentication principal.
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
   * The type of the missing permission.
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
   * System
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

export class ResetOpenSearchPasswordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The additional information returned by the operation. "success" is returned if the operation is successful. Otherwise, the corresponding error code is returned.
   * 
   * @example
   * 【环境：huanghe】\\nhuanghe 503_UC_OUTBOUND告警超过阈值！\\n\\n详情请查看: https://grafana-cn-lbj34sreu03.grafana.aliyuncs.com/d/_rOiq2lNk/asm-status-code-monitor?var-datasource=DataSource-HUANGHE\\n
   */
  message?: string;
  /**
   * @remarks
   * The time when the password was last modified.
   * 
   * @example
   * 2026-08-21T12:00:00Z
   */
  passwordLastModified?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      passwordLastModified: 'PasswordLastModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      passwordLastModified: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetOpenSearchPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: ResetOpenSearchPasswordResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The monitoring data.
   */
  data?: ResetOpenSearchPasswordResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
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
      accessDeniedDetail: ResetOpenSearchPasswordResponseBodyAccessDeniedDetail,
      data: ResetOpenSearchPasswordResponseBodyData,
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

