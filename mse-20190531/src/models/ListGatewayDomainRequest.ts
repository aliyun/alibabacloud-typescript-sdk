// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayDomainRequest extends $dara.Model {
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
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c9bc5afd61014165bd58f621b491****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The type of the domain name.
   * 
   * @example
   * All
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      domainName: 'DomainName',
      gatewayUniqueId: 'GatewayUniqueId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      domainName: 'string',
      gatewayUniqueId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

