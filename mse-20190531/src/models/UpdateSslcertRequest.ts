// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSSLCertRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 5951436-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 210
   */
  domainId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-2a99625886d54722be94d92e9a69****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certIdentifier: 'CertIdentifier',
      domainId: 'DomainId',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certIdentifier: 'string',
      domainId: 'number',
      gatewayUniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

