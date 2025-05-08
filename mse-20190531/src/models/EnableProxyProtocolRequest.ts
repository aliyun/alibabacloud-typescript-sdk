// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableProxyProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to use the proxy protocol to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
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

