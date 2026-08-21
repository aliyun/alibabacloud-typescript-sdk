// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVodDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * cert_name
   */
  certName?: string;
  /**
   * @remarks
   * The accelerated domain name to which the certificate belongs. The domain name must be of the HTTPS acceleration type.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The content of the private key. If you do not enable the certificate, you do not need to enter this parameter. If you configure a certificate, enter the private key content.
   * 
   * @example
   * ****
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether to enable the HTTPS certificate. Valid values:
   * 
   * - **on**: enabled.
   * - **off** (default): disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The content of the security certificate. If you do not enable the certificate, you do not need to enter this parameter. If you configure a certificate, enter the certificate content.
   * 
   * @example
   * ****
   */
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      domainName: 'string',
      ownerId: 'number',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
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

