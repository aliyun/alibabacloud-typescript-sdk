// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthConsumerResourceRequest extends $dara.Model {
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
   * gw-3f97e2989c344f35ab3fd62b19f1****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The resource authorization status. Valid values:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  resourceStatus?: boolean;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * test
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceStatus: 'ResourceStatus',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      pageNum: 'string',
      pageSize: 'string',
      resourceStatus: 'boolean',
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

