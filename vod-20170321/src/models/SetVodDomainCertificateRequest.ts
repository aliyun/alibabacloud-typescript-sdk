// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVodDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * cert_name
   */
  certName?: string;
  /**
   * @remarks
   * The domain name that is secured by the certificate. The domain name must use HTTPS acceleration.
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
   * The private key. This parameter is required only if you enable the SSL certificate.
   * 
   * @example
   * ****
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether to enable the SSL certificate. Default value: off. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The content of the certificate. This parameter is required only if you enable the SSL certificate.
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

