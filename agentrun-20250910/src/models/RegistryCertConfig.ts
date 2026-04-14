// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryCertConfig extends $dara.Model {
  /**
   * @remarks
   * 是否跳过TLS证书验证，设置为true时将不验证镜像仓库的证书
   * 
   * @example
   * false
   */
  insecure?: boolean;
  /**
   * @remarks
   * 镜像仓库的根CA证书Base64编码，用于自签名证书的验证
   * 
   * @example
   * cm9vdF9jYV9jZXJ0X2Jhc2U2NA==
   */
  rootCaCertBase64?: string;
  static names(): { [key: string]: string } {
    return {
      insecure: 'insecure',
      rootCaCertBase64: 'rootCaCertBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insecure: 'boolean',
      rootCaCertBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

