// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthConsumerDetailResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * 123
   */
  consumerId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-4822033a8513496fa10f05c934f*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the resource associated with the consumer authentication record was created.
   * 
   * @example
   * 2022-12-06 01:38:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the resource associated with the consumer authentication record was modified.
   * 
   * @example
   * 2022-12-06 01:38:03
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the authorized resource for the consumer.
   * 
   * @example
   * 16
   */
  id?: number;
  /**
   * @remarks
   * The resource authorization state. Valid values:
   * 
   * *   true: Resource authorization is enabled.
   * *   false: Resource authorization is disabled.
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
   * 3458
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

