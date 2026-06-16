// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAppDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  /**
   * @remarks
   * The SSL certificate name.
   * 
   * @example
   * 2024
   */
  certificateName?: string;
  /**
   * @remarks
   * The certificate type: default free certificate or customer-owned certificate.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * kaibaidu.com
   */
  domainName?: string;
  /**
   * @remarks
   * The private key.
   * 
   * @example
   * ***
   */
  privateKey?: string;
  /**
   * @remarks
   * The public key.
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

