// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreserveHeaderFormatRequest extends $dara.Model {
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
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-3f97e2989c344f35ab3fd62b19f1****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether the request header is case-sensitive. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  preserveHeaderFormat?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      preserveHeaderFormat: 'PreserveHeaderFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      preserveHeaderFormat: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

