// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAppDomainCertificateRequest extends $dara.Model {
  /**
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  /**
   * @example
   * 2024
   */
  certificateName?: string;
  /**
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @example
   * kaibaidu.com
   */
  domainName?: string;
  /**
   * @example
   * ***
   */
  privateKey?: string;
  /**
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

