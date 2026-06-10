// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserTmpIdentityForPartnerResponseBodyDataCredentials extends $dara.Model {
  /**
   * @remarks
   * Encrypted temporary AccessKey ID
   * 
   * @example
   * 7t2Rzt37ND7-xxx
   */
  encryptedAccessKeyId?: string;
  /**
   * @remarks
   * Encrypted temporary AccessKey secret
   * 
   * @example
   * 7t2Rzt37ND7-xxx
   */
  encryptedAccessKeySecret?: string;
  /**
   * @remarks
   * Encrypted Security Token Service token
   * 
   * @example
   * 7t2Rzt37ND7-xxx
   */
  encryptedSecurityToken?: string;
  /**
   * @remarks
   * Expected expiration time of the certificate
   * 
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
  /**
   * @remarks
   * Credential
   */
  credentials?: GetUserTmpIdentityForPartnerResponseBodyDataCredentials;
  /**
   * @remarks
   * Indicates whether authorization from the Customer has been obtained.
   */
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
  /**
   * @remarks
   * Result of the request.
   */
  data?: GetUserTmpIdentityForPartnerResponseBodyData;
  /**
   * @remarks
   * error code. The value is interpreted as follows: If the request succeeded, the ErrorCode field is not returned. If the request failed, the ErrorCode field is returned. For more information, see the error code List in this topic.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * error message.
   * 
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
   * @remarks
   * Indicates whether the request succeeded.
   * 
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

