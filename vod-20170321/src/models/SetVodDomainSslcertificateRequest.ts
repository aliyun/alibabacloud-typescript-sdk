// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVodDomainSSLCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12342707
   */
  certId?: number;
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
   * The region of the certificate. Valid values:
   * 
   * *   **ap-southeast-1**: Singapore
   * *   **cn-hangzhou**: China (Hangzhou)
   * 
   * Default value: **cn-hangzhou**
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * *   **upload**: a user-uploaded SSL certificate.
   * *   **cas**: a certificate that is acquired through Certificate Management Service.
   * 
   * @example
   * cas
   */
  certType?: string;
  /**
   * @remarks
   * VOD acceleration domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether the certificate is issued in canary releases. If you set this parameter to **staging**, the certificate is issued in canary releases. If you do not specify this parameter or set this parameter to other values, the certificate is officially issued.
   * 
   * @example
   * staging
   */
  env?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private key. This parameter is required only if you enable the certificate.
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

