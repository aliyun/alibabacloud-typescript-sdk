// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetailProjectResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
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

export class DetailProjectResponseBody extends $dara.Model {
  accessDeniedDetail?: DetailProjectResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 5244****
   */
  businessId?: number;
  businessName?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 1621236933677
   */
  gmtCreate?: number;
  /**
   * @example
   * 1621236933677
   */
  gmtModified?: number;
  /**
   * @example
   * 1234****
   */
  id?: string;
  /**
   * @example
   * success
   */
  message?: string;
  name?: string;
  /**
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4B***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Token
   * 
   * @example
   * d989623696ab4f87a80b8d5b0b00****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      code: 'Code',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DetailProjectResponseBodyAccessDeniedDetail,
      businessId: 'number',
      businessName: 'string',
      code: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

