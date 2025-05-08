// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthConsumerResourceStatusRequest extends $dara.Model {
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
   * The ID of the consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  consumerId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-2a99625886d54722be94d92e9a69****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The list of IDs of the authorized resources that a user wants to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3,4
   */
  idList?: string;
  /**
   * @remarks
   * The resource authorization status. Valid values:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  resourceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      idList: 'IdList',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      idList: 'string',
      resourceStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

