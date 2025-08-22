// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnDomainSMCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the certificate. The value is Certificate ID-cn-hangzhou. If the ID of the certificate is 123, CertIdentifier is set to 123-cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The accelerated domain name for which the SM certificate is configured.
   * 
   * > The domain name must have HTTPS secure acceleration enabled.
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
   * Specifies whether to enable the SSL certificate. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      SSLProtocol: 'SSLProtocol',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      domainName: 'string',
      ownerId: 'number',
      SSLProtocol: 'string',
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

