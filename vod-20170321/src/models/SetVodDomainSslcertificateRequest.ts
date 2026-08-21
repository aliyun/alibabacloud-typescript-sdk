// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVodDomainSSLCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 12342707
   */
  certId?: number;
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
   * The certificate region. Valid values:
   * - **ap-southeast-1** (Singapore)
   * - **cn-hangzhou** (Hangzhou)
   * 
   * Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - **upload**: an uploaded certificate.
   * - **cas**: a certificate from SSL Certificates Service.
   * 
   * @example
   * cas
   */
  certType?: string;
  /**
   * @remarks
   * The accelerated domain name for ApsaraVideo VOD.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to distribute the certificate in a canary release environment. Valid values:
   * 
   * - **staging**: distributes the certificate in a canary release environment.
   * 
   * If this parameter is not specified or set to any other value, the certificate is formally distributed.
   * 
   * @example
   * staging
   */
  env?: string;
  ownerId?: number;
  /**
   * @remarks
   * The content of the private key. If you do not enable the certificate, you do not need to specify this parameter. If you configure a certificate, enter the private key content.
   * 
   * @example
   * ****
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether to enable the HTTPS certificate. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The content of the security certificate. If you do not enable the certificate, you do not need to specify this parameter. If you configure a certificate, enter the certificate content.
   * 
   * @example
   * ****
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
      env: 'Env',
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
      env: 'string',
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

