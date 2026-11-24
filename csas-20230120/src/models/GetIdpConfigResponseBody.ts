// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdpConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the IDaaS identity source.
   * 
   * @example
   * ExampleAccessKeyId****
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the IDaaS identity source.
   * 
   * @example
   * ExampleAccessKeySecret****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The description of the identity source configuration.
   * 
   * @example
   * Sample identity source
   */
  description?: string;
  /**
   * @remarks
   * The URL used to query the organizational structure of a self-managed identity source.
   * 
   * @example
   * https://172.10.XX.XX:4321/getGroup?name=%s&pass=%s
   */
  getGroupUrl?: string;
  /**
   * @remarks
   * The ID of the identity source configuration.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  id?: string;
  /**
   * @remarks
   * The metadata of the identity provider (IdP).
   * 
   * @example
   * <?xml version="1.0" encoding="utf-8"?>***
   */
  idpMetadata?: string;
  /**
   * @remarks
   * The configuration type of secondary authentication.
   * 
   * @example
   * totp
   */
  mfaConfigType?: string;
  /**
   * @remarks
   * The logon type for mobile devices.
   * 
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @remarks
   * The configuration type of secondary authentication for mobile devices.
   * 
   * @example
   * totp
   */
  mobileMfaConfigType?: string;
  /**
   * @remarks
   * The IDs of multiple identity source configurations.
   * 
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  /**
   * @remarks
   * The name of the identity source configuration.
   * 
   * @example
   * Sample identity source
   */
  name?: string;
  /**
   * @remarks
   * The logon type for PCs.
   * 
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @remarks
   * The enabling status of the identity source configuration. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The type of the identity source configuration.
   * 
   * @example
   * CSAS
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-02-26T02:02:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The encryption key used for requests to a self-managed secondary authentication service.
   * 
   * @example
   * QVhaU0RDR0JIWV****
   */
  verifyAesKey?: string;
  /**
   * @remarks
   * The token used to verify the request signature of a self-managed secondary authentication service.
   * 
   * @example
   * 7JAr3fYtn****
   */
  verifyToken?: string;
  /**
   * @remarks
   * The verification URL of a self-managed secondary authentication service.
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
   * The identity source configuration.
   */
  data?: GetIdpConfigResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

