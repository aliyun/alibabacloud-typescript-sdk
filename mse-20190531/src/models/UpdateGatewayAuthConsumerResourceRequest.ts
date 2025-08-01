// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthConsumerResourceRequestResourceList extends $dara.Model {
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 7816
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * helo
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'RouteId',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'number',
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

export class UpdateGatewayAuthConsumerResourceRequest extends $dara.Model {
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
   * The gateway authentication consumer ID.
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
   * The gateway authentication consumer ID.
   */
  resourceList?: UpdateGatewayAuthConsumerResourceRequestResourceList[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      resourceList: { 'type': 'array', 'itemType': UpdateGatewayAuthConsumerResourceRequestResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

