// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVsDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * Cert-77****6
   */
  certName?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * - upload: uploaded certificate
   * - cas: SSL Certificates Service certificate
   * - free: free certificate
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * The accelerated domain name to which the certificate belongs.
   * 
   * > The domain name must use HTTPS acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * If you set this parameter to 1, the system ignores the validation for duplicate certificate names and overwrites the existing certificate with the same name.
   * 
   * @example
   * 1
   */
  forceSet?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * The content of the private key. This parameter is not required if the certificate is disabled. If you configure a certificate, enter the private key content.
   * 
   * @example
   * xxxxxxx
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether the HTTPS certificate is enabled. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The content of the security certificate. This parameter is not required if the certificate is disabled. If you configure a certificate, enter the certificate content.
   * 
   * @example
   * 328uiuii28****82dsada81
   */
  SSLPub?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      forceSet: 'ForceSet',
      ownerId: 'OwnerId',
      region: 'Region',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      forceSet: 'string',
      ownerId: 'number',
      region: 'string',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

