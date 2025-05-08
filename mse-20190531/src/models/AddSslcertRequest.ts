// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSSLCertRequest extends $dara.Model {
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
   * 5213641-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 0
   */
  domainId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c70622ff52fe49beb29bea9a6f52****
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

