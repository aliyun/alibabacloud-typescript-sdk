// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVsDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * Cert-77****7
   */
  certName?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * - upload: Upload certificate
   * 
   * - cas: Alibaba Cloud Security certificate
   * 
   * - free: Personal test certificate (Free Edition)
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * The accelerated domain name to which the certificate belongs.
   * 
   * > The domain must use HTTPS acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Set to 1 to skip the certificate name duplication check and overwrite an existing certificate with the same name.
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
   * The private key content. Omit this parameter if you disable the certificate. Provide the private key content if you configure a certificate.
   * 
   * @example
   * xxxxxxx
   */
  SSLPri?: string;
  /**
   * @remarks
   * Whether to enable the HTTPS certificate. Valid values:
   * 
   * - **on**: Enable.
   * 
   * - **off** (default): Disable.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public certificate content. Omit this parameter if you disable the certificate. Provide the certificate content if you configure a certificate.
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

