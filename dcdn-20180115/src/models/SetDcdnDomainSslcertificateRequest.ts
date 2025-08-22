// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnDomainSSLCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID. This parameter is required and valid only when **CertType** is set to **cas**. If you specify this parameter, an existing certificate is used.
   * 
   * @example
   * 8089870
   */
  certId?: number;
  /**
   * @remarks
   * The name of the new certificate. You can specify only one certificate name. This parameter is optional and valid only when **CertType** is set to **upload**.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The region of the SSL certificate. This parameter takes effect only when **CertType** is set to **cas**. Default value: **cn-hangzhou**. Valid values: **cn-hangzhou** and **ap-southeast-1**.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **upload**: a user-uploaded SSL certificate.
   * *   **cas**: a certificate that is acquired through Certificate Management Service.
   * 
   * @example
   * upload
   */
  certType?: string;
  /**
   * @remarks
   * The domain name that is secured by the SSL certificate.
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
   * The private key. Specify the private key only if you want to enable the SSL certificate.
   * 
   * @example
   * y****
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether to enable the SSL certificate. Valid values:
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
   * The content of the SSL certificate. Specify the content of the SSL certificate only if you want to enable the SSL certificate.
   * 
   * @example
   * xxx
   */
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      certRegion: 'CertRegion',
      certType: 'CertType',
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
      certId: 'number',
      certName: 'string',
      certRegion: 'string',
      certType: 'string',
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

