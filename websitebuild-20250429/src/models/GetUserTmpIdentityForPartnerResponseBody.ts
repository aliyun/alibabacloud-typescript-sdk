// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserTmpIdentityForPartnerResponseBodyDataCredentials extends $dara.Model {
  /**
   * @example
   * 7t2Rzt37ND7-xxx
   */
  encryptedAccessKeyId?: string;
  /**
   * @example
   * 7t2Rzt37ND7-xxx
   */
  encryptedAccessKeySecret?: string;
  /**
   * @example
   * 7t2Rzt37ND7-xxx
   */
  encryptedSecurityToken?: string;
  /**
   * @example
   * 2025-04-29T14:00:00Z
   */
  expiration?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedAccessKeyId: 'EncryptedAccessKeyId',
      encryptedAccessKeySecret: 'EncryptedAccessKeySecret',
      encryptedSecurityToken: 'EncryptedSecurityToken',
      expiration: 'Expiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedAccessKeyId: 'string',
      encryptedAccessKeySecret: 'string',
      encryptedSecurityToken: 'string',
      expiration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTmpIdentityForPartnerResponseBodyData extends $dara.Model {
  credentials?: GetUserTmpIdentityForPartnerResponseBodyDataCredentials;
  hasCustomRoleAuth?: boolean;
  static names(): { [key: string]: string } {
    return {
      credentials: 'Credentials',
      hasCustomRoleAuth: 'HasCustomRoleAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: GetUserTmpIdentityForPartnerResponseBodyDataCredentials,
      hasCustomRoleAuth: 'boolean',
    };
  }

  validate() {
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTmpIdentityForPartnerResponseBody extends $dara.Model {
  data?: GetUserTmpIdentityForPartnerResponseBodyData;
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetUserTmpIdentityForPartnerResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
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

