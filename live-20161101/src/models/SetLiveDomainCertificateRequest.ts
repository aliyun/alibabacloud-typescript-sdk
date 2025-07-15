// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * Cert-****
   */
  certName?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * *   **upload**: a custom certificate
   * *   **cas**: a certificate that is purchased from Certificate Management Service
   * *   **free**: a free certificate (for testing)
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * The domain name that is secured by the certificate. The domain name uses `HTTPS`-based acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * developer.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to check the certificate name for duplicates. A value of 1 indicates that the system does not perform the check and overwrites the information about the certificate that has the same name. Set the value to **1**.
   * 
   * @example
   * 1
   */
  forceSet?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private key.
   * 
   * >  This parameter is required only if you set the SSLProtocol parameter to on.
   * 
   * @example
   * ****
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether to enable the HTTPS certificate. Valid values:
   * 
   * *   **on**. If you set this parameter to **on**, you must also specify the SSLPub and SSLPri parameters.
   * *   **off**. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key.
   * 
   * >  This parameter is required only if you set the SSLProtocol parameter to on.
   * 
   * @example
   * ****
   */
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      forceSet: 'ForceSet',
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
      certType: 'string',
      domainName: 'string',
      forceSet: 'string',
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

