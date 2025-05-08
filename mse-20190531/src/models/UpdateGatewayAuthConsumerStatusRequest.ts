// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthConsumerStatusRequest extends $dara.Model {
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
   * The status of the consumer. Valid values:
   * 
   * *   true: The consumer is enabled.
   * *   false: The consumer is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  consumerStatus?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-685f661467b54f48b7b7a76605ce****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerStatus: 'ConsumerStatus',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerStatus: 'boolean',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

