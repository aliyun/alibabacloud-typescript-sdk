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

