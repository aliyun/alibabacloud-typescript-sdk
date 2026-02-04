// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAppDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  /**
   * @remarks
   * SSL certificate name
   * 
   * @example
   * 2024
   */
  certificateName?: string;
  /**
   * @remarks
   * Certificate type: Default free certificate or customer\\"s own certificate
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * kaibaidu.com
   */
  domainName?: string;
  /**
   * @remarks
   * Private key
   * 
   * @example
   * ***
   */
  privateKey?: string;
  /**
   * @remarks
   * Public key
   * 
   * @example
   * c3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUxGQnQxUUpyT3IxK2hTTGRkbERMZUx4WGRIZ3hBalBxWHJIbWNFNWxqSk8gbm93Y29kZXJAbm93Y29kZXJkZU1hY0Jvb2stUHJvLmxvY2Fs
   */
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      certificateName: 'CertificateName',
      certificateType: 'CertificateType',
      domainName: 'DomainName',
      privateKey: 'PrivateKey',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      certificateName: 'string',
      certificateType: 'string',
      domainName: 'string',
      privateKey: 'string',
      publicKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

