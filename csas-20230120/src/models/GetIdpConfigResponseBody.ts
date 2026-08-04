// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdpConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessKey ID for the IDaaS identity provider.
   * 
   * @example
   * *******
   */
  accessKey?: string;
  /**
   * @remarks
   * AccessKey for the IDaaS identity provider.
   * 
   * @example
   * *******
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * Description of the identity provider configuration.
   * 
   * @example
   * 示例身份源
   */
  description?: string;
  /**
   * @remarks
   * URL to query the organizational structure from a custom identity provider.
   * 
   * @example
   * https://172.10.XX.XX:4321/getGroup?name=%s&pass=%s
   */
  getGroupUrl?: string;
  /**
   * @remarks
   * ID of the identity provider configuration.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  id?: string;
  /**
   * @remarks
   * Metadata of the identity provider (IdP).
   * 
   * @example
   * <?xml version="1.0" encoding="utf-8"?>***
   */
  idpMetadata?: string;
  /**
   * @remarks
   * Type of multi-factor authentication (MFA) configuration.
   * 
   * @example
   * totp
   */
  mfaConfigType?: string;
  /**
   * @remarks
   * Login type for mobile clients.
   * 
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @remarks
   * Type of MFA configuration for mobile clients.
   * 
   * @example
   * totp
   */
  mobileMfaConfigType?: string;
  /**
   * @remarks
   * List of IDs for multiple identity providers.
   * 
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  /**
   * @remarks
   * Name of the identity provider configuration.
   * 
   * @example
   * 示例身份源
   */
  name?: string;
  /**
   * @remarks
   * Login type for PC clients.
   * 
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @remarks
   * Status of the identity provider configuration. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * Type of the identity provider configuration.
   * 
   * @example
   * CSAS
   */
  type?: string;
  /**
   * @remarks
   * Time when the configuration was last updated.
   * 
   * @example
   * 2024-02-26T02:02:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * AES key used to encrypt requests to a custom MFA service.
   * 
   * @example
   * QVhaU0RDR0JIWV****
   */
  verifyAesKey?: string;
  /**
   * @remarks
   * Token used to verify signatures in requests to a custom MFA service.
   * 
   * @example
   * 7JAr3fYtn****
   */
  verifyToken?: string;
  /**
   * @remarks
   * URL used to verify one-time passwords with a custom MFA service.
   * 
   * @example
   * http://172.10.XX.XX:1234/otp_verify
   */
  verifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessKeySecret: 'AccessKeySecret',
      description: 'Description',
      getGroupUrl: 'GetGroupUrl',
      id: 'Id',
      idpMetadata: 'IdpMetadata',
      mfaConfigType: 'MfaConfigType',
      mobileLoginType: 'MobileLoginType',
      mobileMfaConfigType: 'MobileMfaConfigType',
      multiIdpInfo: 'MultiIdpInfo',
      name: 'Name',
      pcLoginType: 'PcLoginType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      verifyAesKey: 'VerifyAesKey',
      verifyToken: 'VerifyToken',
      verifyUrl: 'VerifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessKeySecret: 'string',
      description: 'string',
      getGroupUrl: 'string',
      id: 'string',
      idpMetadata: 'string',
      mfaConfigType: 'string',
      mobileLoginType: 'string',
      mobileMfaConfigType: 'string',
      multiIdpInfo: 'string',
      name: 'string',
      pcLoginType: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      verifyAesKey: 'string',
      verifyToken: 'string',
      verifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Identity provider configuration.
   */
  data?: GetIdpConfigResponseBodyData;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIdpConfigResponseBodyData,
      requestId: 'string',
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

