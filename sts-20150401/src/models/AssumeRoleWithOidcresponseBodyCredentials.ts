// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithOIDCResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUgYrLnoC37mZZCNnAbez****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the STS token expires. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-20T04:27:09Z
   */
  expiration?: string;
  /**
   * @remarks
   * The STS token.
   * 
   * > Alibaba Cloud STS does not impose limits on the length of STS tokens. We strongly recommend that you do not specify a maximum length for STS tokens.
   * 
   * @example
   * CAIShwJ1q6Ft5B2yfSjIr5bSEsj4g7BihPWGWHz****
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

