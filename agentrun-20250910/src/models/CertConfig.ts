// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertConfig extends $dara.Model {
  /**
   * @remarks
   * 证书的名称。支持字母、数字、下划线（_）和短划线（-），不能以数字和短划线（-）开头。长度范围为 1~128 个字符。
   * 
   * @example
   * my-cert
   */
  certName?: string;
  /**
   * @remarks
   * 证书，如果是证书链，则需要依次填写多个证书。
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\nxxxxx\n-----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * 私钥。
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----\nxxxxx\n-----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'certName',
      certificate: 'certificate',
      privateKey: 'privateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

