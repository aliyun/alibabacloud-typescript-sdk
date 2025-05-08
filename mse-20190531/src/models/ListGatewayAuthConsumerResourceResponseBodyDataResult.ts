// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthConsumerResourceResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * 2
   */
  consumerId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the authorized resource for the consumer.
   * 
   * @example
   * 1
   */
  id?: number;
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
   * The ID of the route.
   * 
   * @example
   * 3091
   */
  routeId?: number;
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
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      resourceStatus: 'ResourceStatus',
      routeId: 'RouteId',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      resourceStatus: 'boolean',
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

