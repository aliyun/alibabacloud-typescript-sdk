// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBlackWhiteListRequest extends $dara.Model {
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
   * The unique ID of the gateway.
   * 
   * @example
   * gw-32d5c9769c1842b1a2cc3426c59e****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether to enable the whitelist.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * IP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      resourceType: 'ResourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      resourceType: 'string',
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

