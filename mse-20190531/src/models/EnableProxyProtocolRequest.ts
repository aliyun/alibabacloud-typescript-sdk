// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableProxyProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned results. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature of preserving the client source IP address by using the PROXY protocol. Valid values:
   * 
   * - **true**: enables the feature of preserving the client source IP address.
   * 
   * - **false** (default): disables the feature of preserving the client source IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-c9bc5afd61014165bd58f621b491*****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enableProxyProtocol: 'EnableProxyProtocol',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enableProxyProtocol: 'boolean',
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

