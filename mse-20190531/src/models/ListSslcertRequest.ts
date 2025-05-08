// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSSLCertRequest extends $dara.Model {
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
   * @example
   * certabc
   */
  certName?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-3f97e2989c344f35ab3fd62b19f1****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certName: 'CertName',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certName: 'string',
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

