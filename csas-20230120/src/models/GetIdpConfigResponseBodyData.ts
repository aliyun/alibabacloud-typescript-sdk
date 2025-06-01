// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdpConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessKey ID
   * 
   * @example
   * LTAI5tJVztnh6Nn***
   */
  accessKey?: string;
  /**
   * @remarks
   * AccessKey Secret
   * 
   * @example
   * E75ktr5jENiR3ssjC***
   */
  accessKeySecret?: string;
  description?: string;
  /**
   * @example
   * https://172.10.10.2:4321/getGroup?name=%s&pass=%s
   */
  getGroupUrl?: string;
  /**
   * @example
   * 1465
   */
  id?: string;
  /**
   * @example
   * <?xml version="1.0" encoding="utf-8"?>***
   */
  idpMetadata?: string;
  /**
   * @example
   * totp
   */
  mfaConfigType?: string;
  /**
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @example
   * totp
   */
  mobileMfaConfigType?: string;
  /**
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  name?: string;
  /**
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * CSAS
   */
  type?: string;
  /**
   * @example
   * 2024-02-26T02:02:42Z
   */
  updateTime?: string;
  /**
   * @example
   * QVhaU0RDR0JIWVV***
   */
  verifyAesKey?: string;
  /**
   * @example
   * 7JAr3fYtnl***
   */
  verifyToken?: string;
  /**
   * @example
   * http://172.10.10.1:1234/otp_verify
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

